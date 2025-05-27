// api/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const mainBackendApp = require("./src/index");

app.use(
  cors({
    origin: ["https://projeto-cubos.vercel.app/", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "x-cubos-token"], // Adicione qualquer cabeçalho personalizado que seu backend usa, como 'x-cubos-token' se for o caso
  })
);

app.use(express.json());
app.use(mainBackendApp); // Agora, 'mainBackendApp' é a instância do Express ou um Router exportado de src/index.js
module.exports = app;
