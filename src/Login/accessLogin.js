import classLogin from './login.js';

const signButton = document.getElementById('signButton');
/*const signButton = document.createElement('button');
signButton.className = 'signButton';
signButton.id = 'signButton';
pageLogin.appenChild(signButton);
contDivLogin.appendChild(pageLogin);*/


/*signButton.addEventListener('click', () => {
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  classLogin.signIn(email, password);
<<<<<<< HEAD
});                         */
=======
});         

// Google 
const buttonGoogle = document.getElementById("googleButton");
buttonGoogle.addEventListener('click' , ()=>{
  classLogin.loginGoogle();
});
>>>>>>> 6b2e3c1df9970e84e9674b36dbca0a48aa36867a
