const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem, validatorUpdateItem } = require("../validators/tracks")
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customeHeader");



//TODO: http://localhost/api/tracks GET, PUT, DELETE, POST

/** 
 * ! Esto se hacian antes 
 * * router.get("/",(req, res)=>{
 * * const data = ["hola","mundo"];
 * * res.send({data});
})
 */
// !esto hacemos ahora
//? -> Ruta de listar items
router.get("/", getItems)

//? -> Obtener el detalle de un item
router.get("/:id", validatorGetItem, getItem)

//!agregamos la validacion con 'validatorCreateItem'
//? -> Ruta de Crear un item con o sin CustomHeader
router.post("/", validatorCreateItem, createItem)
// router.post("/", validatorCreateItem, customHeader, createItem)
//? -> Ruta de actualizar item
router.put("/:id", validatorGetItem, validatorUpdateItem, updateItem)

//? -> Eliminar registro
router.delete("/:id", validatorGetItem, deleteItem)
module.exports = router;
