var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const generateUserArray = (userQuantity) => {
  let arr = [];
  for(var i = 0; i < userQuantity; i +=1){
    arr.push(
      {
      firstName : 'Juan Carlos',
      lastName : 'Morales',
      userName : 'juanki',
      email: 'juan.morales'
    }
    );
  }
  return arr;
};


router.get('/', function(req, res, next){
  res.render('users', {users: generateUserArray(15)});
});

module.exports = {
  router,
  generateUserArray,
};