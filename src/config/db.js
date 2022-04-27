const { Pool } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT

  // user: 'postgres',
  // host: 'localhost',
  // database: 'web2'
  // password: 'wahyu123'
  // port: 5432
})

module.exports = pool
