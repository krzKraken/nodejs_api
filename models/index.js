//Gestionando los modelos
const models = {
    tracksModel: require('./nosql/tracks'),
    usersModel: require('./nosql/users'),
    strorageModel: require('./nosql/storage'),
}
module.exports = models;
