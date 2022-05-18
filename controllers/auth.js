const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleHttpError");

/**
 * Este Controlador es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        //?crea un nuevo objeto body pero en el password le modifica o si no existe lo sobre escribe
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, { strict: false }); //!Quita de la respuesta el parametro y valor password cuando en el moodeelo el select: false no funciona
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({ data: data });
    } catch (error) {
        handleHttpError(res, 'ERROR_REGISTER_USER')
    }
}

/**
 * Este controlador es el encargado de logear un usaurio
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select('password _id') //! debemos poner e select porque en el moodelo esta select: false
        if (!user) {
            handleHttpError(res, 'USER_NOT_EXIST', 404)
            return
        }
        const hashPassword = user.password; //? Esta es la contrasena de la base de datos encriptada
        const check = await compare(req.password, hashPassword) //? compara la contrasena de la peticion (no encriptada) con la hashPsswd encriptada
        if (!check) {
            handleHttpError(res, 'PASSWORD_INVALID', 401);
            return
        }
        user.set('password', undefined, { strict: false }); //! para que no muestre la password en la peticion despues de comparar
        const data = {
            token: tokenSign(user),
            user: user
        }
        res.send({ data })
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}



module.exports = { registerCtrl, loginCtrl };