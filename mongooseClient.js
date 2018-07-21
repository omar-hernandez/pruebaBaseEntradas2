const mongoose = require("mongoose");

let url = "mongodb://principal:libreacceso9@ds235461.mlab.com:35461/leya"
mongoose.connect(url)

const Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId

const entradaSchema = new Schema({
    entrada:ObjectId,
    rama:String,
    tema:String,
    titulo:String,
    abogados:[],
    contenido:String,
    explicacion:String,
    resumen:String,
    imagen:String,
    temasRelacionados:[]
})

var Entrada = mongoose.model("Entrada", entradaSchema)
module.exports = Entrada