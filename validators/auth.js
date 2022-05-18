
const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator"); //? importa utilidad

// por cada Middleware se debe crear un objeto
//? -> Validador para crear Item
const validatorRegister = [
    check("name")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 }),
    check("age")
        .exists()
        .notEmpty()
        .isNumeric(),
    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 15 }),

    (req, res, next) => {
        return validateResults(req, res, next); //* usa utilidad
    }
];

//? -> Validador para get Item
const validatorLogin = [

    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 15 }),
    (req, res, next) => {
        return validateResults(req, res, next); //* usa utilidad
    }
];




module.exports = { validatorRegister, validatorLogin }