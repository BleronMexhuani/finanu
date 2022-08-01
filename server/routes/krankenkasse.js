var express = require("express");

var krankenkasse = require('../controllers/krankenkasse.js');

const router = express.Router();

router.get('/insurances/:plz/:ort/:commune', krankenkasse.getInsurance);
router.get('/regions', krankenkasse.getRegions);
router.get('/actualmodel/:id', krankenkasse.getActualModel);
router.get('/compareInputs/:versicherer/:kanton/:region/:jahrgang/:accident/:tariftyp/:franchise/:model', krankenkasse.compareInputs);

module.exports = router


