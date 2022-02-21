function filterRange(arr, a, b) {
  // ваш код...
  let filteredArr = [];
  for (let i = 0 ; i < arr.length; i += 1) {
    if (arr[i] >= a && arr[i] <= b) {
      filteredArr.push(arr[i]);
    } 
  }
  return filteredArr;
}
