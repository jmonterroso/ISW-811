const dotEnv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
// esta linea ayuda a leer la configuracion que tenemos en el archivo .env
dotEnv.config();

// se define el puerto que va a escuchar basado en el archivo de configuración
const port = process.env.PORT || 3000;

// usamos el middleware cors para aceptar llamadas cors en nuestro servidor
app.use(cors());

// iniciamos nuestro servidor
app.listen(port, () => {
  console.log(`The server has started at http://localhost:${port}`);
});
