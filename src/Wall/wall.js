import { firebaseLogout } from '../main.js';
import { createElement } from '../method/MethodCreateElement.js';


const root = document.getElementById('root');

const wall = {
    feed: (divFeed) => {
        
        const div = document.createElement('div');
        const prueba = document.createElement('p');
        prueba.textContent = 'holaa';
        div.appendChild(prueba);
        
        console.log('Dos veces?');

        //Logout button
        const logoutButton = createElement('button', 'logoutButton', 'logoutButton', '', 'Cerrar Sesión', '');
        logoutButton.addEventListener('click', () => {
            firebaseLogout();
        });

        div.appendChild(logoutButton);

      
        root.appendChild(div);


        return divFeed;
    }

}

export default wall;