const express = require('express')
const app = express()
const port = 3000

app.get('/index', (req, res) => {res.sendFile(__dirname + '/index.html')})

app.listen(port, () => {console.log(`Exemplo de app ouvindo na porta ${port}`)})
