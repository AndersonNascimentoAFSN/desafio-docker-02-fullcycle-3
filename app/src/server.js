const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3333

const config = {
  host: 'dbnode',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

let name = ''

const connection = mysql.createConnection(config)
const sqlInsert = `INSERT INTO people(name) value('Full Cycle Rocks!')`
const sqlSelect = 'SELECT name FROM people WHERE name = "Full Cycle Rocks!"'
connection.query(sqlInsert)
connection.query(sqlSelect, function (err, result) {
  if (err) throw err;
  name = result[0].name
})
connection.end()


app.get('/', (req, res) => {
  res.send(`<h1>${name}</h1>`)
})

app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
})