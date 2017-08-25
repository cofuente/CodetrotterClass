const sequelize = require('./sqlite');

const testConnection = () => {
    sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established succesfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });
};

module.exports = {
    sequelize,
    testConnection
};