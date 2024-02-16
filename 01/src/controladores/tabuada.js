

const somar = function (requisicao, resposta) {
    const { num1, num2 } = requisicao.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${Number(num1) + Number(num2)}`)

    }
    return resposta.send(`Não e um numero`)


}
const multiplicar = function (requisicao, resposta) {
    const { num1, num2 } = requisicao.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {

        return resposta.send(`${(Number(num1)) * (Number(num2))}`)

    }
    return resposta.send("Não e um numero")

}
const subtrair = function (requisicao, resposta) {
    const { num1, num2 } = requisicao.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${(Number(num1)) - (Number(num2))}`)

    }
    return resposta.send("Não e um numero")


}
const dividir = function (requisicao, resposta) {
    const { num1, num2 } = requisicao.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return resposta.send(`${(Number(num1)) / (Number(num2))}`)

    }
    return resposta.send("Não e um numero")


}


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}