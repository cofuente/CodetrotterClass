var prompt = require('prompt-sync')();

function Human(attrs) {
  attrs = attrs || {};
  this.name = attrs.name;
  this.age = attrs.age;
  this.sex = attrs.sex;
  this.skills = attrs.skills || {};

  return this;
}

Human.prototype.learnSkill = function(skill, level) {
  this.skills[skill] = level;
  return this;
}

Human.prototype.checkSkill = function(skill) {
  return this.skills[skill];
}

Human.prototype.toJSON = function() {
  console.log(this);
};


var attrs = {};
attrs.name = prompt('name = ');
attrs.age = Number(prompt('age = '));
attrs.sex = prompt('sex = ');

var totalSkills = prompt('number of skills = ');

var human = new Human(attrs);

for (var i = 0; i < totalSkills; i++) {
  var skill = prompt((i + 1) + '. skill = ');
  var level = prompt((i + 1) + '. level = ');
  human.learnSkill(skill, level);
}

console.log(human.toJSON());