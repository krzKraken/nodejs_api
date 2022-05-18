const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const TracksScheme = new mongoose.Schema(
  //Creamos la estructura que va a tener a base en mongos en este caso es de usuario
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// !borrado logico, se elimina cambiando el estado del item sin eliminarlo completamente de la base de datos
TracksScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tracks", TracksScheme);