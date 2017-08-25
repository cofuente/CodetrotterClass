const Sequelize = require('sequelize');
const {sequelize} = require('../db/index');
const faker = require('faker');

const Client = sequelize.define('clients', {
    fullName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

const sync = () => {

    Client.sync({force:true}).then(()=>{
        const clients = [];
        _.times(5, () => {
            Client.create({
                fullName: faker.name.findName(),
                email: faker.internet.email()
            })
        });
    })
};

module.exports = {
    Client,
    sync
};