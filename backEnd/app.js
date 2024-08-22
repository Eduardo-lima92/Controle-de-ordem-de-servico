const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cos', (req, res) => {
    res.send('<h2>Controle de Ordem de serviço: Utilizando express.js</h2>')
});

app.use(express.json());
app.post('/equipamentos', (req, res) => {
    const { modelo, serie } = req.body;
    res.send(`Equipamento: ${modelo} - serie: ${serie}`)
})

const log = (req, res, next) => {
    console.log(`............Acessado em ${new Date()}`)
    next();
}

app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor tranferido com sucesso...")
})

const ordens = require('./ordens')
app.use('/ordens', ordens)

app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}`)
});