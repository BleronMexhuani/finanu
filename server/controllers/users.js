var express = require('express');
var util = require('util');
var mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const query = util.promisify(connection.query).bind(connection);
var user = {
    Register: Register = async (req, res) => {
        try {
            const data = req.body;
            const check_if_email_exists = await query("SELECT * FROM users WHERE email = ?", [data.email]);

            if (check_if_email_exists.length) {
                res.status(201).json("The email already exists");
            }
            else {
                const saltRounds = await bcrypt.genSalt(10);
                data.password = await bcrypt.hash(data.password, saltRounds);

                const user = await query("INSERT INTO users (username,email,password,age,address,street) VALUES (?,?,?,?,?,?)",
                    [data.username, data.email, data.password, data.age, data.address, data.street]);

                const token = jwt.sign(
                    { data },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                data.token = token;

                res.status(200).json(data);
            }
        } catch (error) {
            res.status(404).json(error.message);
        }
    },

    Login: Login = async (req, res) => {
        try {

            const email = req.body.email;
            const password = req.body.password;

            const user = await query("SELECT * FROM users WHERE email = ?", [email]);

            if (user.length) {
                const hashed_pass = user[0].password;
                const password_validate = await bcrypt.compare(password, hashed_pass);

                if (password_validate) {
                    const token = jwt.sign(
                        { user },
                        process.env.TOKEN_KEY,
                        {
                            expiresIn: "2h",
                        }
                    );
                    user[0].token = token;
                    res.status(200).json(user[0]);
                }
                else {
                    res.status(500).json("Invalid Credentials");
                }
            }
            else {
                res.status(500).json("Invalid Credentials");
            }

        } catch (error) {
            res.status(404).json(error.message);
        }
    }
}

module.exports = user