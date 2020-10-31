const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeaterPatern = '';
  let addStr ='';
  let newStr = '';
  let reapeter;
  let separator;
  let addition;
  let additionRepeat;
  let additionSeparator;
  //parse data 
  options.repeatTimes !== undefined ? reapeter = options.repeatTimes : reapeter = 1;
  options.separator !== undefined ? separator = options.separator : separator = "+";
  options.addition !== undefined ? addition = `${options.addition}` : addition = '';
  options.additionRepeatTimes !== undefined ? additionRepeat = options.additionRepeatTimes : additionRepeat = 1;
  options.additionSeparator !== undefined ? additionSeparator = options.additionSeparator : additionSeparator = '|';

  addStr=addition+additionSeparator;
  for (let i=1; i<=reapeter; i++) {
    repeaterPatern+=`${str}` + addStr.repeat(additionRepeat).slice(0, -(additionSeparator.length))+separator;
  }

  return repeaterPatern.slice(0, -(separator.length));
};
  