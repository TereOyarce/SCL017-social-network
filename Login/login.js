import { normalAccess } from './accessLogin.js';
import { googleAccess } from './accessLogin.js';

const divRoot = document.getElementById('root');

const LoginMethod = {
    
    login: (divLogin) => {
        const contDivLogin = document.createElement('div');

        const loginButton = document.createElement('button');
        loginButton.id = 'loginButton';
        loginButton.classList.add('loginButton');
        loginButton.textContent = 'Iniciar Sesión';
        loginButton.addEventListener('click', () => {
          normalAccess()
        });

        const googleLogin = document.createElement('button');
        googleLogin.id = 'googleLogin';
        googleLogin.classList.add('googleLogin');
        googleLogin.textContent = 'Google';
        googleLogin.addEventListener('click', () => {
          googleAccess();
        });



        contDivLogin.appendChild(loginButton);
        contDivLogin.appendChild(googleLogin);

        divRoot.appendChild(contDivLogin);
        
        

        return divLogin;
    },
};



export default LoginMethod;