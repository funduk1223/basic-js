const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function(item){
    item.forEach(function(cat){
    if (cat === "^^")
      count++;
    });
  });
  return count;
};
