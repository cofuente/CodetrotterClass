const Sequelize = require('sequelize');
const {sequelize} = require('../orm');

const Order = sequelize.define('products', {
    product_amount: {
        type: Sequelize
    },
    subtotal: {
        type: Sequelize.DECIMAL(7,2)
    },
    total: {
        type: Sequelize.DECIMAL(7,2)
    }
});

const sync = () => {
    Order.sync({force:true});
};