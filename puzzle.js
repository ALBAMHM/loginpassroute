// Snippets de código para poder componer el programa

//Usado?: YES
  const middlewares = require('./middlewares');
//--- Explicación: Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES 
const express = require('express');
//--- Explicación: Lo usamos para importar express.

// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación:Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación:Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
const routes = require('./routes');
//--- Explicación:Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: Método que busca archivo llamado .env en el directorio raíz del proyecto

// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación: Usado para inicializar el servidor.

// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación: Declarar puerto

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: Importar módulo

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: Método que busca archivo llamado .env en el directorio raíz del proyecto

// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:YES
routes.setup(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES 
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación:  


// -------------------------------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro 
})}
//--- Explicación: 


// -------------------------------------------------------------------------------------


//Usado?: YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 


// -------------------------------------------------------------------------------------

//Usado?: YES
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación:

//Usado?: YES
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 

// -------------------------------------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// -------------------------------------------------------------------------------------


//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  setup,
};
//--- Explicación: Exportar módulo setup 

// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: Exportar los 3 módulos 

// -------------------------------------------------------------------------------------

