const express = require("express");
const authMiddleware = require('../middlewares/auth')
const listConvocados = require('../controladores/listConvocados');

const router = express.Router();

router.get("/", authMiddleware, listConvocados);
router.post("/", authMiddleware, listConvocados);

module.exports = router;