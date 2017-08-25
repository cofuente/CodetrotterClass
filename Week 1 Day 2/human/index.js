const chalk = require('chalk');
const Human = require('./components/human');
const defaultHuman = require('./components/human')
var prompt = require('prompt-sync')();

var attrs = {};
attrs.name = prompt('name = ');
attrs.age = Number(prompt('age = '));
attrs.sex = prompt('sex = ');

var totalSkills = prompt('number of skills = ');

var human = new Human(attrs);
console.log(human);

for (var i = 0; i < totalSkills; i++) {
  var skill = prompt((i + 1) + '. skill = ');
  var level = prompt((i + 1) + '. level = ');
  human.learnSkill(skill, level);
}

console.log(human);
human.toColoredString();


