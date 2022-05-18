const multer = require("multer");

/**
 *  *configuracion del Multer 
*/

const storage = multer.diskStorage({
    // * cb -> es un callback donde se ejecuta el fin de la secuencia logica
    destination: function (req, file, cb) {
        const pasthStorage = `${__dirname}/../storage`;
        cb(null, pasthStorage) //! primer parametro es error
    },
    filename: function (req, file, cb) {
        //! depende de como deseamos que se almacenen, si permites sobre escribir archivos o con nombres randoms para que nunca se sobreescriban
        //? archivo.png, archivo.pdf
        //*Obtenemos la extencion del archivo ["archivo","png"]
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`; //? 1231245621 timeStamp 
        cb(null, filename)
    }
});

const uploadMiddleware = multer({ storage: storage });

module.exports = uploadMiddleware;