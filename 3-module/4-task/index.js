function showSalary(users, age) {
  // ваш код...
  let userList = '';
  for (item of users) {
    if (item.age <= age) {userList = userList + `\n${item.name}, ${item.balance}`;}
  }
  return userList.trim();
}