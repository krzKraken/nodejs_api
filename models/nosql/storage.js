const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StorageScheme = new mongoose.Schema(
    //Creamos la estructura que va a tener a base en mongos en este caso es de usuario
    {
        url: {
            type: String,
        },

        filename: {
            type: String,

        },

    },
    {
        timestamps: true, //TODO: createAt, updateAt
        versionKey: false,
    }

);
StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", StorageScheme);