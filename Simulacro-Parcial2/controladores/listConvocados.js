const express = require("express");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    if (convocados.length == 22) {
        res.json(convocados);
    }else{
        res.send('No hay 22 jugadores convocados');
    }
});

router.post('/', (req, res) => {
    let listaConv = [];
    listaConv = req.body;
    listaConv.forEach(element => {
        const jugador = jugadores.find(jugador => jugador.nombre === element);
        if (jugador && jugador.suspended && jugador.injured) {
            if (convocados.lenght < 22){
                convocados.push(jugador);
            }
        }
    });
    let response = "Ahora hay " + convocados.length + " jugadores convocados";
    res.send(response);
});

module.exports = router;