/*var soma = require('./soma.js')
var subtracao = require('./subtracao.js')
var divisao = require('./divisao.js')
var multiplicacao = require('./multiplicacao.js')
console.log("")
console.log(soma(10,10))
console.log("")
console.log(subtracao(14,10))
console.log("")
console.log(divisao(14,10))
console.log("")
console.log(multiplicacao(10,10))*/

var http = require("http")

http.createServer(function(req, res){//req = requisição   res = enviar resposta
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor ativo")