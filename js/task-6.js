function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const form = document.querySelector('#controls');
const input = document.querySelector('input');
input.classList.add('number-input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
createBtn.classList.add('create');
destroyBtn.classList.add('destroy');
const createBoxes = amount => {
  boxes.innerHTML = '';
  const newBoxes = Array(amount)
    .fill('')
    .map((_, i) => {
      const size = 30 + i * 10;
      const color = getRandomHexColor();
      return `<div class="new-box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    })
    .join('');
  boxes.innerHTML = newBoxes;
};
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});
const destroyBoxes = () => {
  boxes.innerHTML = '';
};
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
