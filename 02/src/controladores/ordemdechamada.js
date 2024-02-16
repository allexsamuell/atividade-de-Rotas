const { jogadores } = require('../bancodedados')
let jogadordavez = 0
let ordem = function (req, res) {
    const nomeDoJogador = jogadores[jogadordavez]
    jogadordavez++
    if (jogadordavez >= jogadores.length) {
        jogadordavez = 0
    }
    return res.send(`É a vez de ${nomeDoJogador} jogar!`)

}
let remover = function (req, res) {
    const { indiceArray } = Number(req.query.indice)

    if (indiceArray >= jogadordavez.length) {
        return res.send(`Não existe jogador no índice informado (${indiceArray}) para ser removido.`)
    }

    jogadores.splice(indiceArray, 1)
    return res.send(jogadores)

}

let adicionar = function (req, res) {
    let nomeDoJogador = req.query.nome
    const indiceDoArray = Number(req.query.indice)

    nomeDoJogador = `${nomeDoJogador[0].toUpperCase()}${nomeDoJogador.slice(1).toLowerCase()}`

    if (isNaN(indiceDoArray)) {
        jogadores.push(nomeDoJogador)
        return res.send(jogadores)
    }
    if (indiceDoArray >= jogadores.length) {
        return res.send(`O indice informado (${indiceDoArray} nao existe no array.`)
    }
    jogadordavez.splice(indiceDoArray, 0, nomeDoJogador)
    return res.send(jogadores)
}





module.exports = {
    ordem,
    remover,
    adicionar
}