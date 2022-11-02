const express = require('express');
const user = require('../controllers/users.js');
const auth = require('../middleware/Auth');

const router = express.Router();

router.post("/register", user.Register);
router.post("/login", user.Login);
router.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

module.exports = router;