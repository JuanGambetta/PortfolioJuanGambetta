const express = require("express");
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    if(!req.body.name){
        res.json(jugadores);
    }else{
        console.log(req.body.name);
        let name = req.body.name;
        let jugadorNombre = [];
        jugadorNombre = jugadores.filter(i => {
          if (i.name === name) {
              return true;
          }
          return false;
        });
        console.log(jugadorNombre);
        if (jugadorNombre.length > 0) {
            res.json(jugadorNombre);
        }else{
        res.send('Jugador no encontrado');
        }
    }
});

router.post('/', (req, res) => {
    const {id, name, position, suspended, injured} = req.body;
    const jugador = {
        id,               //falta chequear que sean del tipo especificado
        name,
        position,
        suspended,
        injured
    }

    if (!id || !name || !position && suspended != null && injured != null) {
        res.send('Debe ingresar todos los datos: id, name, position, suspended, injured');
        return;
    }

    if (position != 'GK' && position != 'DF' && position != 'MD' && position != 'FW') {
        res.send('El campo position solo acepta: GK, DF, MD, FW');
        return;
    }

    console.log(jugador.suspended)

    if (!jugador.suspended == true && !jugador.suspended == false) {
        res.send('El campo suspended solo acepta: true o false');
        return;
    }

    if (!jugador.injured == true && !jugador.injured == false) {
        res.send('El campo injured solo acepta: true o false');
        return;
    }

    console.log(jugador);
    if (!id || !name || !position && suspended != null && injured != null) {
        res.send('Debe ingresar todos los datos');
        return;
    }else{
    console.log(jugador);
    jugadores.push(jugador);
    res.send('Se agrego el jugador');
    }
});

router.delete('/', (req, res) => {
    const {name} = req.body;
    jugadores = jugadores.filter(i => {
        if (i.name !== name) {
          return true;
        }
        return false;
      });

    res.send('Jugador eliminado');
});

module.exports = router;