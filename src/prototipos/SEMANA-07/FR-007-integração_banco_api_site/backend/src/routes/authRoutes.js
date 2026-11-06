const express = require("express");

const {
    cadastrar,
    login
} = require("../controllers/authController");

const router = express.Router();

router.post("/cadastro", cadastrar);
router.post("/login", login);

module.exports = router;