import { normalAccess } from './accessLogin.js';
import { googleAccess } from './accessLogin.js';
import { createElement } from '../method/MethodCreateElement.js';

const divRoot = document.getElementById('root');

const LoginMethod = {

    login: (divLogin) => {
        const contDivLogin = document.createElement('div');

        // Input Email
        contDivLogin.appendChild(createElement('input', 'userInput', 'userInput', 'email', 'Ingresa tu correo', ''));

        // Input password
        contDivLogin.appendChild(createElement('input', 'passInput', 'passInput', 'password', 'Contraseña', ''));


        //Boton Login
        const loginButton = createElement('button', 'loginButton', 'loginButton', '', 'Iniciar Sesión', '');

        contDivLogin.appendChild(loginButton);

        loginButton.addEventListener('click', () => {
            const email = userInput.value;
            const password = passInput.value;

            normalAccess(email, password);
        });

        //Login Google
        const googleLogin = createElement('button', 'googleLogin', 'googleLogin', '', 'Iniciar Sesión con Google', '');
        contDivLogin.appendChild(googleLogin);
        googleLogin.addEventListener('click', () => {
            googleAccess();
        });


        divRoot.appendChild(contDivLogin);




        return divLogin;
    },
};



export default LoginMethod;