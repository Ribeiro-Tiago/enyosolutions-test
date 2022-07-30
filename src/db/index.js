const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "foo",
  port: 3306,
  database: "foobar",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
