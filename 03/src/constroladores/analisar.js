
const { imoveis } = require('../bancodedados')
const consultar = function (req, res) {
    return res.json(imoveis)
}
const achar = function (req, res) {
    const { id } = req.params
    const imovel = imoveis.find((item) => {
        item.id === Number(id)
    })
    return res.send(imovel)
}

module.exports = {
    consultar, achar
}
