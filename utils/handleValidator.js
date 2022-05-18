const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        console.log("------Pasa validacion------");
        return next(); //? continua al controlador
    } catch (error) {

        res.status(403); //? un error y no pasa
        res.send({ errors: error.array() });
        console.log("------Error en validacion------");
        console.log(error.errors)
    }
};

module.exports = validateResults;

