//!AQUI ESTARA LA LOGICA DE LA APLICACION
const { matchedData, body } = require('express-validator');
const { tracksModel } = require('../models/index'); //Importa el modelo del trackModels del index

const { handleHttpError } = require("../utils/handleHttpError");
/**
 * *Obtener lista de base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({})
        console.log(data);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }

};
/**
 * *Obtener un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req); //! limpia lla solicitud de parametros basura
        const { id } = req
        const data = await tracksModel.findById(id);
        console.log(data);
        res.send({ data });

    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
};

/**
 * *Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        //const { body } = req; // es lo mismo
        // const body = req.body; // es lo mismo
        const body = matchedData(req); //! bodyClean sin dato basura
        // console.log(body); //? lo que envia en la peticion
        const data = await tracksModel.create(body) //Envia a la base de datos
        //Los controladores si o si deben retornar algo
        console.log({ data });//? Lo que envia la respuesta
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
};

/**
 * *Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        /** 
         * !crea dos objetos uno con el id, y otro con el resto del body
         * {
         * id
         * },
         * {
         * body...
         * }
         */
        // console.log(id, body);
        const data = await tracksModel.findOneAndUpdate(
            id, body
        ) //Envia a la base de datos
        //Los controladores si o si deben retornar algo
        console.log(data);
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS")
    }
};
/**
 * *Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {

    try {
        req = matchedData(req); //! limpia el request
        const { id } = req
        // const data = await tracksModel.deleteOne({ _id: id }); //!elimina de la base de datos
        const data = await tracksModel.delete({ _id: id }); //? borrado logico por el plugin
        console.log(data);
        res.send({ data });

    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }

};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }