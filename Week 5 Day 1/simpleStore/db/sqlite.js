const Sequelize = require('sequelize');

const sequelize = new Sequelize('store_db', null, null, {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    storage: './db/store_db.sqlite'
});

module.exports = {
    sequelize
};