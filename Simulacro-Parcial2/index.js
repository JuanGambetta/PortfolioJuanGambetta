const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const jugadoresRouter = require('./router/jugadoresRouter');
const convocadosRouter = require('./router/convocadosRouter');

const app = express();
const port = 3000;

global.jugadores = [];
global.administradores = [];
global.convocados = [];

app.use(cors());
app.use(express.json());

app.use('/players', jugadoresRouter);
app.use('/convocados', convocadosRouter);

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const admin = administradores.find(admin => admin.username === username && bcrypt.compareSync(password, admin.hashedPassword));

  if (admin) {
    //auth ok
    const token = jwt.sign({ username: username }, process.env.SECRET, { expiresIn: '1h' });
    res.status(200).json({ token: token });
  } else {
    res.status(403).json({ message: 'Invalid credentials' });
  }
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const saltHash = 10;
  const hashedPassword = bcrypt.hashSync(password, saltHash);

  administradores.push({ username, hashedPassword });
  console.log(username, hashedPassword);

  res.status(200).json({ message: 'Registro exitoso' });
  console.log(administradores);
});


app.listen(port, () => console.log(`Agenda app listening on port ${port}!`));
