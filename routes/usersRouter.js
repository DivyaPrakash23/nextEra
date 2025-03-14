const express = require('express');
const router = express.Router();
const {registerUser , loginUser,logout} = require('../controllers/authController');
const isLoggedin = require('../middlewares/isLoggedin');

router.get('/', (req, res) => {
    res.send('Response from router');
});
router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/logout", logout)

module.exports = router; 
