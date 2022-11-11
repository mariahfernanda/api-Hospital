const express = require('express');
const app = express();

app.use(express.json());

const pacienteController = require('./controller/PacienteController');

app.use('/', pacienteController)

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - http://localhost:3000')
})