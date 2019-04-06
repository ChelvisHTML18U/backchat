"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuarios {
    constructor() {
        this.lista = [];
    }
    /**
     * Fucion para agregar un usario a la lista de usuarios
     * @param usuario
     */
    agregar(usuario) {
        this.lista.push(usuario);
    }
    /**
     * Funcion para devolver los usuarios activos
     * OJO EN EL CHAT
     */
    getLista() {
        let listaTemporal = this.lista.filter((usuario) => {
            // if(usuario.nombre!='sin-nombre'){//cuando si tenga un nombre lo retornare a una lista temporal
            return usuario;
            // }
        });
        return listaTemporal;
    }
    /**
     * Actualiza el nombre de un usuario  presente en la lsita de usuarios
     * dado su id de maquina
     * @param id
     * @param nombre
     */
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
            //de la lista en cada interaccicon la variable 
            //usuario va a ser el elmento de cada intereaccion
        }
    }
    /**
     * Funcion que devuelve un usario dado su id
     * @param id
     */
    getUsuario(id) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                return usuario;
            }
        }
    }
    borrarUsuario(id) {
        this.lista = this.lista.filter((usuario) => {
            if (usuario.id !== id) {
                return usuario;
            }
        });
    }
}
exports.Usuarios = Usuarios;
