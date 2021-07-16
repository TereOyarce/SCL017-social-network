import { createElement } from '../method/MethodCreateElement.js';
import { register } from './accessRegister.js';
import { elementR } from './login.js';



export const registerMethod = {

    reg: (registerModal) => {
        const modalC = document.createElement('div');
        modalC.id = 'modalC';
        modalC.className = 'modalC';

        const modal = document.createElement('div');
        modal.clasName = 'modal';

        modal.appendChild(createElement('input', 'emailR', 'emailR', 'email', 'Ingrese correo', '')); //Input correo
        modal.appendChild(createElement('input', 'passR', 'passR', 'password', 'contraseña', '')); // Input clave
        modalC.appendChild(modal);


        const btnR = elementR;
        btnR.addEventListener('click', () => {
            modalC.classList.add('show');
        });

        const registerB = createElement('button', 'registerB', 'registerB', '', 'Registrarse', '');
        modal.appendChild(registerB);

        registerB.addEventListener('click', () => {
            const emailRegister = emailR.value;
            const passRegister = passR.value;
            register(emailRegister, passRegister, sucess);
        });

        const btnX = createElement('button', 'btnX', 'btnX', '', 'cerrar', '');
        modal.appendChild(btnX);

        btnX.addEventListener('click', () => {
            modalC.classList.remove('show');

        });

        return registerModal





    }
};