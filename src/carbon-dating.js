const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof sampleActivity === 'string' && Number(sampleActivity) &&
   (Number(sampleActivity)>0 && Number(sampleActivity)<=15)){
    let numActivity = Number(sampleActivity);
    k = 0.693/HALF_LIFE_PERIOD;
    t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
    return Math.ceil(t);
  }

  else return false;
  

};
