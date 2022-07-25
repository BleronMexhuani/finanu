import express from "express";

import { getInsurance,getRegions ,getActualModel,compareInputs} from '../controllers/krankenkasse.js';

const router = express.Router();


router.get('/insurances/:plz/:ort/:commune', getInsurance);
router.get('/regions', getRegions);
router.get('/actualmodel/:id', getActualModel);
router.get('/compareInputs/:versicherer/:kanton/:region/:jahrgang/:accident/:tariftyp/:franchise/:model',compareInputs);


export default router;


