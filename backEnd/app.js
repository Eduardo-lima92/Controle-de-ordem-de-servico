const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cos', (req, res) => {
    res.send('<h2>Controle de Ordem de serviço: Utilizando express.js </h2>')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});