function getMinMax(str) {
  // ваш код...
  const result = {
    min: null,
    max: null,
  };
  let numArr = [];

  str.split(' ').forEach(element => {
    return isFinite(element) ? numArr.push(Number(element)) : 0;
  });

  numArr.sort((a, b) => a - b);
 
  result.min = numArr[0];
  result.max = numArr[numArr.length - 1];
  return result;
}


let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData));