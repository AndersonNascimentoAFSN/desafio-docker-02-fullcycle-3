const mysql = require('mysql')

const config = {
  host: 'dbnode',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

async function querySql(sql) {
  const connection = mysql.createConnection(config)

  const queryPromise = new Promise((resolve, reject) => {
    connection.query(sql, function (err, result) {
      if (err)  reject(err)

      resolve(result)
    })
  })

  const results = await queryPromise;
  connection.end()
  return results
}

const Repository = {
  querySql
}

module.exports = { Repository }