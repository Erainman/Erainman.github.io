
var checkPerfectNumber = function(num) {
  if(num === 0)
      return false ;
  else
      return num === getCommondivisorSum(num) ? true:false; 
};
var getCommondivisorSum = function(num) { 
      let sum = 0;
      for (let i = 1; i < Math.sqrt(num); i++) {
          if (num % i === 0) {
          sum += (i+num/i);
          }
      }
  return sum-num;
}