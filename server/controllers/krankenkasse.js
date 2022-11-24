var express = require("express");
var mysql = require('mysql');
var util = require('util');
const nodemailer = require('nodemailer');
const router = express.Router();
require("dotenv").config();

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const query = util.promisify(connection.query).bind(connection);

var krankenkasse = {

    getInsurance: getInsurance = async (req, res) => {
        try {
            let plz = req.params.plz;
            let ort = req.params.ort;
            let commune = req.params.commune;
            await query("SELECT kanton,region FROM regions WHERE plz = ? AND ort = ? AND commune = ?  ", [plz, ort, commune], async (err, response) => {
                let kanton = response[0]['kanton'];
                let region = response[0]['region'];
                await query("SELECT Versicherer FROM pramien WHERE Kanton = ? AND Region = ? GROUP BY Versicherer ", [kanton, 'PR-REG CH' + region], async (err, response) => {
                    var data = [];
                    response.forEach(element => {
                        data.push(element['Versicherer'])
                    });
                    await query("SELECT * FROM insurance WHERE number IN(?)", [data], (err, response) => {
                        res.status(200).json(response);
                    })
                })
            });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    getRegions: getRegions = async (req, res) => {
        try {

            await query("SELECT * FROM regions", (request, response) => {
                res.status(200).json(response)
            })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
    ,
    getActualModel: getActualModel = async (req, res) => {
        let id = req.params.id;
        let kanton = req.params.kanton;
        let region = req.params.region;
        try {
            await query("SELECT id, Tarifbezeichnung,Tariftyp FROM pramien WHERE Versicherer = ? AND Kanton = ? AND Region = ? GROUP BY Tarifbezeichnung", [id,kanton,'PR-REG CH' + region], (request, response) => {
                res.status(200).json(response);
            })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
    ,
    compareInputs: compareInputs = async (req, res) => {

        let versicherer = req.params.versicherer;
        let kanton = req.params.kanton;
        let region = req.params.region;
        let jahrgang = req.params.jahrgang;
        let accident = req.params.accident;
        let tariftyp = req.params.tariftyp;
        let franchise = req.params.franchise;
        let model = req.params.model;
        var multipleChildren = false;

        try {
            var altersungrupe = '';
            const todayDate = new Date();
            let split_jahrgang = jahrgang.split(",");
            let Franchise_price = franchise.split(",");
            let unfalleinschluss = accident.split(",");
            let altersklasse;
            let count_alterklasse = 0;

            const currentYear = todayDate.getFullYear();
            const data = [];
            const dataSelectedKrankenkasse = [];

            for (let i = 0; i < split_jahrgang.length; i++) {
                altersklasse = currentYear - split_jahrgang[i];
                if (parseInt(altersklasse) < 18) {
                    altersklasse = 'AKL-KIN';
                    if (!multipleChildren) {
                        count_alterklasse++;
                        altersungrupe = 'K1';
                    }
                    else {
                        altersungrupe = 'K3';
                    }
                    if (count_alterklasse > 1) {
                        multipleChildren = true;
                    }
                }
                else if (parseInt(altersklasse) <= 25 && parseInt(altersklasse) >= 18) {
                    altersklasse = 'AKL-JUG';
                    altersungrupe = '';
                }
                else {
                    altersklasse = 'AKL-ERW';
                    altersungrupe = '';
                }

                let rows = await query("SELECT Pramie,Tarifbezeichnung,name,Versicherer,id_ FROM pramien LEFT JOIN insurance ON Versicherer = number WHERE  Kanton = ? AND region = ? AND Altersklasse = ? AND Unfalleinschluss = ? AND Tariftyp IN (?) AND Franchise = ? AND Altersuntergruppe = ?  ORDER BY Pramie",
                    [kanton, 'PR-REG CH' + region, altersklasse, unfalleinschluss[i], tariftyp.split(","), 'FRA-' + Franchise_price[i], altersungrupe]);

                let excactKrankenkasse = await query("SELECT Pramie,Tarifbezeichnung,name,Versicherer,id_ FROM pramien LEFT JOIN insurance ON Versicherer = number WHERE  Kanton = ? AND region = ? AND Altersklasse = ? AND Unfalleinschluss = ?  AND Franchise = ? AND Altersuntergruppe = ? AND Versicherer = ? AND Tarifbezeichnung = ? ORDER BY Pramie",
                    [kanton, 'PR-REG CH' + region, altersklasse, unfalleinschluss[i], 'FRA-' + Franchise_price[i], altersungrupe, versicherer, model]);

                Array.prototype.push.apply(data, rows);
                Array.prototype.push.apply(dataSelectedKrankenkasse, excactKrankenkasse);

            }
            const Versicherer = [];
            const final_data = [];
            const final_data_selected_krankenkasse = [];

            data.forEach(element => {
                if (!Versicherer.includes(element.Versicherer + element.name + element.Tarifbezeichnung)) {
                    Versicherer.push(element.Versicherer + element.name + element.Tarifbezeichnung);

                    const sumofPramie = data
                        .filter(({
                            Versicherer, name, Tarifbezeichnung
                        }) => Versicherer == element.Versicherer && name == element.name && Tarifbezeichnung == element.Tarifbezeichnung)
                        .reduce((sum, record) => sum + parseFloat(record.Pramie), 0);

                    final_data.push({
                        id: element.id_,
                        tarif: element.Tarifbezeichnung,
                        Versicherer: element.Versicherer,
                        name: element.name,
                        price: sumofPramie
                    });

                }
            });

            const VersichererKranken = [];
            dataSelectedKrankenkasse.forEach(element => {
                if (!VersichererKranken.includes(element.Versicherer + element.name + element.Tarifbezeichnung)) {
                    VersichererKranken.push(element.Versicherer + element.name + element.Tarifbezeichnung);

                    const sumofPramie = dataSelectedKrankenkasse
                        .filter(({
                            Versicherer, name, Tarifbezeichnung
                        }) => Versicherer == element.Versicherer && name == element.name && Tarifbezeichnung == element.Tarifbezeichnung)
                        .reduce((sum, record) => sum + parseFloat(record.Pramie), 0);

                    final_data_selected_krankenkasse.push({
                        id: element.id_,
                        tarif: element.Tarifbezeichnung,
                        Versicherer: element.Versicherer,
                        name: element.name,
                        price: sumofPramie
                    });

                }
            });

            res.status(200).json({final_data,final_data_selected_krankenkasse});
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    },
    sendMailKrakenkasse: sendMailKrakenkasse = async (req, res) => {
        const data = req.body;
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        })

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" 123123', // sender address
            to: "bleronmexhuani1@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);

    }
}

module.exports = krankenkasse