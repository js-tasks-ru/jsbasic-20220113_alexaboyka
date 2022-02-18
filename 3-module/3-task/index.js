function camelize(str) {
  // ваш код...
  let arr = str.split('-');
  console.log(arr);

  let newArr = arr.map((item, index)=> {
    return !item || index === 0 ? item : item = item[0].toUpperCase() + item.substring(1, item.length);
  });
  
  return str = newArr.join(''); 
}
