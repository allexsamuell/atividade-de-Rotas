const express = require('express')
const { rotas } = require('./roteadores')

const app = express()
app.user(express.json())
app.use(rotas)







app.listen(8000)