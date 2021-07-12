import classLogin from './login.js';

const signButton = document.getElementById('signButton');

signButton.addEventListener('click', () => {
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  classLogin.signIn(email, password);
});                         