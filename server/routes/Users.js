const express = require('express');
const { Register, Login } = require('../controllers/Users.js');
const auth = require('../middleware/Auth');

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

module.exports = router;