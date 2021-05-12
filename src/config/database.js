var logger = require('morgan');

// const fs = require('fs')
// const rdsCa = fs.readFileSync('certs/rds-ca-2019-root.pem')
// const sslOptions = process.env.NODE_ENV && ['production', 'staging', 'demo'].includes(process.env.NODE_ENV) ? {
//   ssl: {
//     rejectUnauthorized: true,
//     ca: [rdsCa]
//   }
// } : {}
const sslOptions = {
  ssl: {
    rejectUnauthorized: false
  }
} 

const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD, {
    host: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: sslOptions,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    logging: query => (process.env.DB_LOGGING === 'true' ? logger.debug(`Query: ${query}`) : null)
  }
)

console.log('DATABASE_URL', process.env.DATABASE_URL)

const dbConnection = () => {
  db.authenticate()
    .then(() => {
      db.sync() // adding { force: true } will reset the db
      logger.info('Connected to Postgres')
    })
    .catch(error => {
      console.error('Postgres connect error - ', error)
      // dbConnection()
    })
}

module.exports = dbConnection
