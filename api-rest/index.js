console.log("Olá mundo");

//Importação de pacotes/módulos para uso da aplicação
var express = require("express"); //Importação do pacote express
var app = express(); //Inicialização da aplicação 'app' pelo pacote

//Importação do pacote mongoose
var mongoose = require("mongoose");
// Configuração da conexão com o MongoDB no serviço cloud MongoDB Atlas
const uri =
  "mongodb+srv://Eliabe:281178ed@senai-mongodb.v8cvxpc.mongodb.net/?retryWrites=true&w=majority";

console.log(uri);

//Validação da configuração da conexão com o MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("A conexão com o MongoDB foi realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

//Rota para exibir uma mensagem ao usuário
app.get("/", (req, res) => {
  res.send("Olá mundo! Esta é a página inicial da nossa aplicação.");
});

//A porta é uma variável de ambiente
//const porta = process.env.PORT || 8080;
const porta = 8080;
app.listen(porta, () => {
  console.log("Servidor inicializado na porta: " + porta);
});
