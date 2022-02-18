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