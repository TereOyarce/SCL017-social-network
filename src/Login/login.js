import { normalAccess } from './accessLogin.js';
import { googleAccess } from './accessLogin.js';

const divRoot = document.getElementById('root');

const LoginMethod = {

    login: (divLogin) => {
        const contDivLogin = document.createElement('div');

        const userInput = document.createElement('input');
        userInput.id = 'userInput';
        userInput.classList.add('userInput');
        userInput.setAttribute('type', 'email');
        userInput.setAttribute('placeholder', 'Ingresa tu correo');

        const passInput = document.createElement('input');
        passInput.id = 'passInput';
        passInput.classList.add('passInput');
        passInput.setAttribute('type', 'password');
        passInput.setAttribute('placeholder', 'Contraseña');

        const loginButton = document.createElement('button');
        loginButton.id = 'loginButton';
        loginButton.classList.add('loginButton');
        loginButton.textContent = 'Iniciar Sesión';
        loginButton.addEventListener('click', () => {
            userInput.value;
            passInput.value;

            normalAccess('', '');
        });

        const googleLogin = document.createElement('button');
        googleLogin.id = 'googleLogin';
        googleLogin.classList.add('googleLogin');
        googleLogin.textContent = 'Google';
        googleLogin.addEventListener('click', () => {
            googleAccess();
        });


        contDivLogin.appendChild(userInput);
        contDivLogin.appendChild(passInput);
        contDivLogin.appendChild(loginButton);
        contDivLogin.appendChild(googleLogin);

        divRoot.appendChild(contDivLogin);



        return divLogin;
    },
};



export default LoginMethod;