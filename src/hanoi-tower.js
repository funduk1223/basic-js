const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resObj = {
    turns: 0,
    seconds: 0,
  };
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor((3600 / turnsSpeed)*turns);
  resObj.turns = turns;
  resObj.seconds = seconds;
  return resObj;
};
