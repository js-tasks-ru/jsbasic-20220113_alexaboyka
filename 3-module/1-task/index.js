function namify(users) {
  // ваш код...
  let arrOfNames = [];
  for (let i = 0 ; i < users.length; i += 1) {
    arrOfNames.push(users[i].name);
  }
  return arrOfNames;
}
