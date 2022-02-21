function hideSelf() {
  // ваш код...
  let hide = function () { this.setAttribute('hidden', true);};
  let but = document.getElementsByClassName('hide-self-button');
  but[0].addEventListener('click', hide);
}
