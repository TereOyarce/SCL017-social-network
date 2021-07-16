import { normalAccess } from './accessLogin.js';
import { googleAccess } from './accessLogin.js';
import { createElement } from '../method/MethodCreateElement.js';

const divRoot = document.getElementById('root');

const LoginMethod = {

    login: (divLogin) => {
        const contDivLogin = document.createElement('div');
        contDivLogin.classList.add('contDivLogin');


        //DIV IZQUIERDO
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('leftDiv');

        //imagen
        leftDiv.appendChild(createElement('img', '', 'imgLeft', '', '', './img/houseac.png'));

        contDivLogin.appendChild(leftDiv);

        //DIV DERECHO
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('rightDiv');

        //Head Div
        const headDiv = createElement('div');
        headDiv.classList.add('headDiv');

        //logo
        headDiv.appendChild(createElement('img', '', 'logo', '', '', './img/logo.png'))

        //nook-Nook
        const nook = document.createElement('p');
        nook.classList.add('nook');
        nook.textContent = 'Nook-Nook';

        headDiv.appendChild(nook);
        rightDiv.appendChild(headDiv);

        //Termino Head Div//

        //Mid Div
        const midDiv = createElement('div');
        midDiv.classList.add('midDiv');

        //Bienvenido
        const welcome = document.createElement('p');
        welcome.classList.add('welcome');
        welcome.textContent = 'Bienvenid@';
        midDiv.appendChild(welcome);

        // input Email
        midDiv.appendChild(createElement('input', 'userInput', 'userInput', 'email', 'Ingresa tu correo', ''));

        // input password
        midDiv.appendChild(createElement('input', 'passInput', 'passInput', 'password', 'Contraseña', ''));


        //boton Login
        const loginButton = createElement('button', 'loginButton', 'loginButton', '', 'Iniciar Sesión', '');

        midDiv.appendChild(loginButton);

        loginButton.addEventListener('click', () => {
            const email = userInput.value;
            const password = passInput.value;
            normalAccess(email, password);
        });

        //login Google
        const googleLogin = createElement('button', 'googleLogin', 'googleLogin', '', 'Iniciar Sesión con Google', '');

        midDiv.appendChild(googleLogin);

        googleLogin.addEventListener('click', () => {
            googleAccess();
        });
        rightDiv.appendChild(midDiv);
        //Termino Mid Div//

        //Foot Div
        const footDiv = createElement('footer');
        footDiv.classList.add('footDiv');

        var element = document.createElement("a");
        element.classList.add('element')
        element.setAttribute("href", '#');
        element.innerHTML = "<p>¿No tienes cuenta?</p> <h4>¡REGÍSTRATE AQUÍ!</h4>";



        rightDiv.appendChild(footDiv);
        footDiv.appendChild(element);

        contDivLogin.appendChild(rightDiv);

        divRoot.appendChild(contDivLogin);
        return divLogin;
    },
};



export default LoginMethod;