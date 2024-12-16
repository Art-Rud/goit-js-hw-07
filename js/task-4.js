const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (
    loginForm.elements.email.value === '' ||
    loginForm.elements.password.value === ''
  ) {
    alert('All form fields must be filled in');
  }
  const formData = {
    [loginForm.elements.email.name]: loginForm.elements.email.value,
    [loginForm.elements.password.name]: loginForm.elements.password.value,
  };
  console.log(formData);
  loginForm.reset();
});
const btn = document.querySelector('button');
btn.textContent = 'Log in';
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  const placeholder = input.placeholder;
  input.addEventListener('focus', () => {
    input.placeholder = `${input.type}`;
  });
  input.addEventListener('blur', () => {
    input.placeholder = '';
  });
});
