function ucFirst(str) {
  // ваш код...
  if (!!str) {
    let firstLetter = str[0].toUpperCase();
    let EndOfTheWord = str.substring(1, str.length);
    str = firstLetter + EndOfTheWord;
  }
  return str;
}



