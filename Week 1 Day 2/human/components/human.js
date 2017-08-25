var prompt = require('prompt-sync')();
const chalk = require('chalk');


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
  console.log(chalk.red(this));
};

Human.prototype.toColoredString = function() {
  console.log(chalk.red(this.name));
  console.log(chalk.green(this.age));
  console.log(chalk.blue(this.sex));
  console.log(chalk.yellow(this.skills));
}

module.exports = Human;
