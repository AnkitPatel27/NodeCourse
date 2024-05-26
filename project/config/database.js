const { Sequelize } = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('mariaDB_project', 'root', 'MySQL^*892023', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3306, // Default MariaDB port
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('https://sqliteonline.com/#emlink=;project;ritikgupta9414%40gmail.com');

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

module.exports = sequelize;