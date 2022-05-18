const express = require("express")
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //? Separa el tracks.js en [tracks, js] y toma ele tracks
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)// users, storage, tracks
    if (name !== 'index') {
        // console.log(`Cargando rutan ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //? http://localhost:3001/api/ +tracks

    }
});
module.exports = router