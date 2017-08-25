const Sequelize = require('sequelize');
const {sequelize} = require('../orm');

const Cart = sequelize.define('carts', {
    quantity: {
        type: Sequelize.INT
    }
});

const sync = () => {
    Cart.sync({force:true});
};

module.exports = {
    Cart,
    sync
};