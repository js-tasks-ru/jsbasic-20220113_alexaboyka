function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + '…';
  }
  return str;
}
/* let str = 'Вот, что мне хотелось бы сказать на эту тему:';
let maxlength = 20;
console.log(truncate(str, maxlength));
 */
