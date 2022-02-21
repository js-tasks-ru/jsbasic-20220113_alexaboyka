function toggleText() {
  // ваш код...
  let showHide = function () {
    return text.hasAttribute('hidden') ? text.removeAttribute('hidden') : text.setAttribute('hidden', true);};
  let but = document.getElementsByClassName('toggle-text-button');
  but[0].addEventListener('click', showHide);
}