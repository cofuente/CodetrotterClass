const Sequelize = require('sequelize');
const {sequelize} = require('../db/index');

const Product = sequelize.define('products', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL(7,2)
    }
});

const sync = () => {
    Product.sync({force:true}, ()=> {
    _.times(10, () => {
            Product.create({
                name: faker.commerce.productName,
                price: faker.commerce.price
            });
        })
    });
};