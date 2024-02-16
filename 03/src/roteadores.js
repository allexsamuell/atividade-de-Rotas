const express = require('express')
const { consultar, achar } = require('./constroladores/analisar')
const eotas = express()
rotas.get('/imoveis', consultar)
rotas.get('/imoveis/:id', achar)


module.exports = {
    rotas
}