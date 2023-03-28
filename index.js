const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'usuario' && password === 'contraseña') {
    res.send('Inicio de sesión correcto');
  } else {
    res.send('Nombre de usuario o contraseña incorrectos');
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${8080}`);
});
