require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo"); //-> lo Exportado desde mongo.js

app.use(cors());

//preparar a la app para recibir informacion
app.use(express.json());
//!para usar datos publicos (leer los storages)
app.use(express.static("storage"));

const port = process.env.PORT || 3000

/**
 * Aqui invocamos a las rutas
 */
//TODO: localhost/api/___lo que venga
// app.use("/api", require("./routes/index"));
app.use("/api", require("./routes/index"))


app.listen(port, () => {
    console.log(`http://localhost: ${port}`)
});

dbConnect();


