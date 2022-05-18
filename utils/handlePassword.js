const bcryptjs = require("bcryptjs");
/**
 * Contrasena sin encriptar: hola.01
 * @param {} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);//?ASDF$#%GFDGdsfg45
    return hash;
}

//? Comparamos si el passwordPlai es igual al encriptado
/**
 * Pasar contrasena sin encriptar y contrasena encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)

}


module.exports = { encrypt, compare }