const express = require('express')
const { ordem, remover, adicionar } = require('./controladores/ordemdechamada')
const app = express()

app.get('/', ordem)
app.get('/remover', remover)
app.get('/adicionar', adicionar)







app.listen(8000)