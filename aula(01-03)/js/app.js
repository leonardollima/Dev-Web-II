const express = require("express")
const app = express()

//Criando uma rota para o diretório principal do domínio
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})


app.get("/produto/:item/:quantidade", function(req, res){
    res.send("Item: " + req.params.item + "<br>Quantidade: " + req.params.quantidade)
})


app.get("/cadastro", function(req, res){
    res.send("Estou na página de cadastro")
})


//Criando o servidor web na porta 8081
app.listen(8081, function(){
    console.log("Servidor ativo!")
})