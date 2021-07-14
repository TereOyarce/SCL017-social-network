import { normalAccess } from './accessLogin.js';
import { googleAccess } from './accessLogin.js';
import { createElement } from '../method/MethodCreateElement.js';

const divRoot = document.getElementById('root');

const LoginMethod = {

  login: (divLogin) => {
    const contDivLogin = document.createElement('div');

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
    const logo = document.createElement('p');
    logo.classList.add('logo');
    logo.textContent = 'Nook-Nook';
    headDiv.appendChild(logo);

    rightDiv.appendChild(headDiv);

    //Mid Div
    const midDiv = createElement('div');
    midDiv.classList.add('midDiv');

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

    contDivLogin.appendChild(midDiv);

    //Foot Div
    const footDiv = createElement('footer');

    var element = document.createElement("a");
    element.setAttribute("href", 'www.google.cl');
    element.innerHTML = "REGISTRATE AQUÍ";

    footDiv.appendChild(element);

    rightDiv.appendChild(footDiv);

    contDivLogin.appendChild(rightDiv);

    divRoot.appendChild(contDivLogin);
    return divLogin;
  },
};



export default LoginMethod;