//!AQUI ESTARA LA LOGICA DE LA APLICACION DE ARCHIVO
const fs = require("fs");
const { storageModel } = require('../models/index'); //Importa el modelo del trackModels del index
const { handleHttpError } = require('../utils/handleHttpError');
const { matchedData } = require("express-validator");
// const storage = require("../models/nosql/storage");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * *Obtener lista de base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {

    try {
        const data = await storageModel.find({})
        console.log(data);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
};
/**
 * *Obtener detalle de item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req); //! filtra el ID
        const { id } = req
        const data = await storageModel.findById(id);
        console.log(data);
        res.send({ data });

    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_GET_ITEM_STORAGE')
    }
};

/**
 * *Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        // const { body } = req; // es lo mismo
        const { body, file } = req; // es lo mismo
        console.log(file);
        //!este es el file name que es nuestro modelo
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }

        const data = await storageModel.create(fileData) //Envia a la base de datos

        //Los controladores si o si deben retornar algo
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_UPLOAD_ITEM");
    }
};


/**
 * *Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {

        const { id } = matchedData(req); //! filtra el ID
        // const data = await tracksModel.deleteOne({ _id: id }); //!elimina de la base de datos
        const dataFile = await storageModel.findById({ _id: id }); //? borrado logico por el plugin
        await storageModel.delete({ _id: id }); //! soft delete de la base de datos, persiste en archivos y en base de datos
        const { filename } = dataFile; //? el filename que viene en el data
        const filePath = `${MEDIA_PATH}/${filename}` //? c:/miproyecto/file-123.jpg ejemplo
        // fs.unlinkSync(filePath); //!Elimna el archivo fisico de la carpeta storage
        const data = {
            filePath,
            delete: 1
        }
        console.log(data);
        res.send({ data });

    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_DELETE_ITEM_STORAGE')
    }
};

module.exports = { getItems, getItem, createItem, deleteItem }
