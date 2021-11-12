const express = require("express");
const pach = require("path");
require("dotenv").config();

// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require("./sockets/socket");



// Pach Público
const publicPach = pach.resolve( __dirname, "public");
app.use( express.static( publicPach ));



server.listen( process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log("Servidor corriendo en puerto", process.env.PORT );
});
