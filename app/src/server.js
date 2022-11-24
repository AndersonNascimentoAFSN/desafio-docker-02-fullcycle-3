const express = require('express')
const app = express()
const { Repository } = require('./repository')

const port = 3333

app.get('/', async (_, res) => {
  const selectSql = `SELECT * FROM people`;
  const people = await Repository.querySql(selectSql);

  const title = '<h1>Full Cycle Rocks!</h1>'
  const listNames = `
  <ul>
    ${people.map((person) => `<li>${person.name}</li>`).join('')}
  </ul>
`

  res.send(`${title} ${listNames}`)
})

app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
  
  const createSql = `
  CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(80), PRIMARY KEY (id));
`
  Repository.querySql(createSql)

  const sqlInsert = `INSERT INTO people(name) values
    ('Anderson Nascimento'),
    ('Bruno Teixeira'),
    ('Thyago Teixeira'),
    ('Yanni Teixeira')
  `
  Repository.querySql(sqlInsert);

})