const customHeader = (req, res, next) => {
    // console.log(req.headers);
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === "kraken123") {
            console.log("Paso el middleware del headers");
            next();
        } else {
            console.log("error en middleware del header, api key incorrecta");
            res.status(403)
            res.send({ error: "API_KEY_INCORRECTA" })
        }
    } catch (error) {
        console.log("Algo ocurrio con el custom header");
        res.status(403)
        res.send({ error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER" })
    }
}

module.exports = customHeader;