const express = require('express')
const bodyParser = require('body-parser')
const Entrada = require("./mongooseClient.js")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{ res.send('Base entradas, raíz')
});

app.post("/api/createEntrada", (req,res)=>{
    const {rama,tema,titulo,abogados,contenido,explicacion,resumen,imagen,temasRelacionados} = req.body
    let nuevoEntrada = Entrada({
        rama,
        tema,
        titulo,
        abogados,
        contenido,
        explicacion,
        resumen,
        imagen,
        temasRelacionados
    })
    nuevoEntrada.save((err,response)=>{
        res.status(201).send(response)
    })

})

app.get("/api/entradas", (req,res)=>{
    Entrada.find().exec()
        .then(entradas=>res.send(entradas))
        .catch(err=>res.send(err))
})

app.get("/api/entradas/:uid", (req,res)=>{
    let {uid} = req.params
    Entrada.findById(uid).exec()
        .then(entrada=>res.send(entrada))
        .catch(err=>res.send(err))

})










app.listen(3011, () => console.log('Example app listening on port 3011!'))