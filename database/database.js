const Sequelize = require("sequelize");
const connection = new Sequelize("devpress", "root", "", { host: 'localhost', dialect: 'mysql' });
module.exports = connection;

