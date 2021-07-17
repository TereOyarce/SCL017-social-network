/*import { createElement } from '../method/MethodCreateElement.js';
import { register } from './accessRegister.js';
import { elementR } from './login.js';



export const registerMethod = {

    reg: (registerModal) => {
        const modalC = document.createElement('div');
        modalC.id = 'modalC';
        modalC.className = 'modalC';

        const modal = document.createElement('div');
        modal.clasName = 'modal';

        const emailR = createElement('input', 'emailR', 'emailR', 'email', 'Ingrese correo', ''); //Input correo
        const passR = createElement('input', 'passR', 'passR', 'password', 'contraseña', ''); // Input clave
        const registerB = createElement('button', 'registerB', 'registerB', '', 'Registrarse', ''); // boton registrarse
        const btnX = createElement('button', 'btnX', 'btnX', '', 'cerrar', ''); // boton cerrar modal
        modal.appendChild(emailR);
        modal.appendChild(passR);
        modal.appendChild(registerB);
        modal.appendChild(btnX);
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
};*/