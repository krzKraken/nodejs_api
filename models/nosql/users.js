const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserScheme = new mongoose.Schema(
    //Creamos la estructura que va a tener a base en mongos en este caso es de usuario
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            select: false //? Ocuta el parametro en las consutas cuando el filtro permite realizar un filtrado
        },
        role: {
            type: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true, //TODO: createAt, updateAt
        versionKey: false,
    }

);
UserScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("users", UserScheme);