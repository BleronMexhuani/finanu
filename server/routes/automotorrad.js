var express = require("express");
var automotorrad = require('../controllers/automotorrad.js');

const router = express.Router();

router.get('/getMarke', automotorrad.getMarke);
router.get('/getModell/:actualMarke',automotorrad.getModell);

module.exports = router