//Declaramos el uso del mongoose
const mongoose = require("mongoose");

// La funcion dbConnect que sera la funcion que se conectara
const dbConnect = () => {

    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log("*******Conexion Correcta*********");
        }
        else {
            console.log("********Error de conexion******");
            console.log(err);
        }
    });
};

//exportamos el dbConnect para que se pueda usar desde cualuqier lado
module.exports = dbConnect;

