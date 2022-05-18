const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const { validatorGetItem } = require("../validators/storage")
const { createItem, getItems, getItem, deleteItem, updateItem } = require("../controllers/storage");



// !Ruta: http://localhost:3001/api/storage


//* Cuando se aplique un metodo post en la ruta http://localhost:3001/api/storage va a caer en este metodo
//! el middleware *uploadMiddleware* se coloca entre el "/" y el controlador y se coloca single("nombre de la propiedad que viene desde el postman 'myfile' ") o multi("Si es mas de un arhcivo ") 

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);
router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router;