
const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator"); //? importa utilidad

// por cada Middleware se debe crear un objeto
//? -> Validador para crear Item
const validatorCreateItem = [
    check("name")
        .exists()
        .notEmpty(),
    check("album")
        .exists()
        .notEmpty(),
    check("cover")
        .exists()
        .notEmpty(),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("artist.nationality")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next); //* usa utilidad
    }
];

//? -> Validador para get Item
const validatorGetItem = [

    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next); //* usa utilidad
    }
];
const validatorUpdateItem = [
    check("name")
        .exists()
        .notEmpty(),
    check("album")
        .exists()
        .notEmpty(),
    check("cover")
        .exists()
        .notEmpty(),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("artist.nationality")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .notEmpty(),
    check("duration.end")
        .exists()
        .notEmpty(),
    check("mediaId")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next); //* usa utilidad
    }

];




module.exports = { validatorCreateItem, validatorGetItem, validatorUpdateItem }