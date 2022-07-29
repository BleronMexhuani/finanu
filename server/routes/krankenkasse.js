var express = require("express");

var getInsurance = require('../controllers/krankenkasse.js');
var getRegions = require('../controllers/krankenkasse.js');
var getActualModel = require('../controllers/krankenkasse.js');
var compareInputs = require('../controllers/krankenkasse.js');

const router = express.Router();


router.get('/insurances/:plz/:ort/:commune', getInsurance);
router.get('/regions', getRegions);
router.get('/actualmodel/:id', getActualModel);
router.get('/compareInputs/:versicherer/:kanton/:region/:jahrgang/:accident/:tariftyp/:franchise/:model', compareInputs);

module.exports = router


