// config inicial
const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

// Forma de ler JSON/ middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// Rotas da API
const postsRoutes = require('./Routes/postsRoutes')

app.use('/posts', postsRoutes)

// Rota/ Endpoint inicial
app.get('/', (req,res) =>{
    res.json({message: 'Testando API'})
})

// entregar uma porta
mongoose.connect('mongodb+srv://'+ process.env.DB_LOGIN + '' + ':' + process.env.DB_PASSWORD + '@blog.cadpuaq.mongodb.net/bancodedados?retryWrites=true&w=majority') // conectar ao banco de dados
.then(() => {
    console.log("Conectamos ao mongo DB")
    app.listen(5000) // Vai ler a porta
})
.catch((err) => console.log(err))