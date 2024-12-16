const nameInput = document.querySelector('#name-input');
nameInput.classList.add('name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim();
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});
const body = document.querySelector('body');
body.classList.add('task3-body');
const box = document.createElement('div');
box.classList.add('box');
body.append(box);
const tittle = document.querySelector('h1');
box.append(nameInput, tittle);
