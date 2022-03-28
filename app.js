const express = require('express');
const res = require('express/lib/response');
const port = 3030
const app = express()

app.get('/', (req, res) => {
    res.send('Página Inicial')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre o nosso projeto')
})

app.get('/contato', (req, res) => {
    res.send('Fale conosco')
})

app.listen(port, () => {
    console.log('O servidor está funcionando na porta ' + port)
})