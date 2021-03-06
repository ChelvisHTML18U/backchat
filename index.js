"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server")); //configuracion
const router_1 = require("./routes/router");
//inicializando el servidor
const server = new server_1.default();
server.app.use('/', router_1.router); //inicializando router
server.start();
