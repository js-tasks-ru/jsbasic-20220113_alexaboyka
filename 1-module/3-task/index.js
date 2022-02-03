function ucFirst(str) {
  // ваш код...
  if (!!str) {
    firstLetter = str[0].toUpperCase();
    EndOfTheWord = str.substring(1, str.length);
    str = firstLetter + EndOfTheWord;
  }
  return str;
}



