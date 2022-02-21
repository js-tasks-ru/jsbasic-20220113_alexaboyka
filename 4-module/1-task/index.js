function makeFriendsList(friends) {
  // ваш код...
  const newUl = document.createElement('ul');
  for (item of friends) {
    const newLi = document.createElement('li');
    newLi.textContent = `${item.firstName} ${item.lastName}`;
    newUl.append(newLi);
  }
  return newUl;
}