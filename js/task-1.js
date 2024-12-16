const items = document.querySelectorAll('.item');
console.log(`Number of catigories: ${items.length}`);
items.forEach(item => {
  const tittle = item.querySelector('h2').textContent;
  const elem = item.querySelectorAll('ul li');
  console.log(`Category: ${tittle}`);
  console.log(`Elements: ${elem.length}`);
});
