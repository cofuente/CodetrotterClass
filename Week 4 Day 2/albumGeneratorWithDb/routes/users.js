var express = require('express');
var router = express.Router();
const {User} = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then((users) => {
    res.render('users_list', {data: users});
  });
});

router.get('/create', function(req, res, next){
  res.render('users_create');
});

router.post('/create', function(req, res, next){
  const {firstName, lastName} = req.body;
  User.create({firstName, lastName}).then((result) =>{
    res.render('users_details', {data: result});
  });
  
});

router.get('/:userId/edit', function(req, res, next){
  const id = parseInt(req.params.userId);
  User.findById(id).then((result) => {
    res.render('users_edit', {data:result});
  });
});

router.post('/:userId/edit', function(req, res, next){
  const _id = parseInt(req.params.userId);
  const _firstName = req.body.firstName;
  const _lastName = req.body.lastName;
  let obj = {firstName : _firstName, lastName : _lastName};
  User.update(obj, 
  {where : {id : _id}}).then((result) =>{
    res.render('users_details', {data:obj});
  });
});

router.get('/:userId/delete', function(req, res, next){
  const _id = parseInt(req.params.userId);
  User.destroy({where : {id:_id}}).then( () =>{
    res.send('<p>The requested user has been deleted</p> <a href="/users">Return</a>');
  });
});

router.delete('/', function(req, res, next){
  User.destroy({where: {id:parseInt(req.body.id)}}).then(() => {
    User.findAll().then((users) => {
      res.render('users_list', {data: users});
    });
  });
});

router.get('/:userId', function(req, res, next){
  const id = parseInt(req.params.userId);
  User.findById(id).then((result) => {
    res.render('users_details', {data :  result});
  });
});


module.exports = router;
