const express = require('express'); //code para importar pacotes. 
//Nesse caso o express. Express é um microframework. com poucas funções. 
//Mas funcões básicas que ajudam o começo da aplicação.
const cors = require('cors');
const routes = require('./routes');

const app = express(); //criando a aplicação. Onde tem rotas etc
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //porta de acesso para a apliação
