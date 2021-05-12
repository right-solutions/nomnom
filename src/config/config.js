require('dotenv').config()

console.log({DATABASE_URL: process.env.DATABASE_URL})

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    use_env_variable: "DATABASE_URL",
    dialectOptions: {ssl: { require: true }}
  },
}