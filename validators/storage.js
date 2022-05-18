
const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator"); //? importa utilidad

// por cada Middleware se debe crear un objeto
//? -> Validador para get storage item
const validatorGetItem = [

    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next); //* usa utilidad
    }
];




module.exports = { validatorGetItem }