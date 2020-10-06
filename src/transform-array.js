const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = arr;
  let map = new Map();
  let disNext = '--discard-next';
  let disPrev = '--discard-prev';
  let dobNext = '--double-next';
  let dobPrev = '--double-prev';

  if (arr === []) return [];
  if (!Array.isArray(arr)) throw new Error()
  else {

    for(let i=0; i<=newArray.length-1; i++){
      map.set(i, newArray[i])
    } 
  }

  let result = [];
  map.forEach((value, key, map)=>{
    if (value === disNext){
   
      map.set(key, undefined);
      map.set(key+1, undefined);
      console.log(map);
    }
    if (value === disPrev ){
      
      map.set(key, undefined);
      map.set(key-1, undefined);

    }
    if (value === dobNext){
     
      map.set(key, map.get(key+1, value));

    }
    if (value === dobPrev){

      map.set(key, map.get(key-1, value));

    }
  });

  for (let obj of map.values()){
    if (obj !== undefined){
      result.push(obj);
    }
  }

  return result;
}