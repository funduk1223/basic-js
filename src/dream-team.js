const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  let checkMembers = true;
  if (Array.isArray(members)){
    members.forEach(function(unit){
      if (typeof unit === 'string'){
        let str = unit.replace(/\s+/g,'');
        teamName.push(str[0].toUpperCase());
      }
    });
    
    let result = teamName.sort().join('');
  
    return (checkMembers === true ? result : false);
  }
  else return false;
};
