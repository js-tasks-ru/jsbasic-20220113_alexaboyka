function checkSpam(str) {
  // ваш код...
  let strToLowerCase = str.toLowerCase();
  let SpamTemplates = ['1xbet', 'xxx'];
  return (strToLowerCase.includes(SpamTemplates[0]) || strToLowerCase.includes(SpamTemplates[1]));
}

