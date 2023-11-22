const express = require("express");
const authMiddleware = require('../middlewares/auth')
const listJugadores = require('../controladores/listJugadores');

const router = express.Router();


router.get("/", authMiddleware, listJugadores);
router.post("/", authMiddleware, listJugadores);
router.delete("/", authMiddleware, listJugadores);

module.exports = router;