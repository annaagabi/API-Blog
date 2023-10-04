// config inicial
const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

// forma de ler JSON/ middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota/ endpoint inicial
app.get('/', (req, res) => {
    // mostrar requisição (req)

    res.json({ message: 'Oi Express!' }) // a rota básica vai ser um JSON
})

//
// const DB_USER = encodeURIComponent('anna')
// const DB_PASSWORD = encodeURIComponent('anna')

 // entregar uma porta
// banco de dados
mongoose
    .connect('mongodb+srv://' + process.env.DB_LOGIN + '' + ':' + process.env.DB_PASSWORD  + '@apicluster.cbashoh.mongodb.net/bancodaapi?retryWrites=true&w=majority')  //conectar com a string
    // .connect(`mongodb+srv://anna:anna@apicluster.cbashoh.mongodb.net/bancodaapi?retryWrites=true&w=majority`)  //conectar com a string
    // mongodb+srv://anna:<password>@apicluster.cbashoh.mongodb.net/?retryWrites=true&w=majority
    //  mongodb+srv://anna:<password>@apicluster.cbashoh.mongodb.net/?retryWrites=true&w=majority
    // mongodb+srv://anna:<password>@apicluster.cbashoh.mongodb.net/?retryWrites=true&w=majority
    .then(() => {  // quando da certo
        console.log("Conectamos ao mongo DB")
        app.listen(3000) // vai ler a porta
    })
    .catch((err) => console.log(err)) // quando da erro




// Login: anna
// Senha: anna

// String de conexão:
// mongodb+srv://anna:<password>@apicluster.cbashoh.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://anna:anna@apicluster.cbashoh.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://anna:anna@apicluster.cbashoh.mongodb.net/bancodaapi?retryWrites=true&w=majority