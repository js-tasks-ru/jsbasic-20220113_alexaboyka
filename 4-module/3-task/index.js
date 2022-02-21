function highlight(table) {
  // ваш код...
  Array.from(table.tBodies).forEach(elementBody =>
    Array.from(elementBody.rows).forEach(bodyRow => {
      if (Number(bodyRow.cells[1].innerHTML) < 18) {
        bodyRow.style.textDecoration = "line-through";
      }
      if (bodyRow.cells[2].innerHTML === 'm') {
        bodyRow.classList.add('male');
      }
      else if (bodyRow.cells[2].innerHTML === 'f') {
        bodyRow.classList.add('female');
      }
      if (bodyRow.cells[3].hasAttribute('data-available')) {
        return bodyRow.cells[3].getAttribute('data-available') === 'true' ? bodyRow.classList.add('available') : bodyRow.classList.add('unavailable');
      }
      else {bodyRow.setAttribute('hidden', true);}
    }
    )
  );
}
