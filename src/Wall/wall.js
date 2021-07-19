import { firebaseLogout } from '../main.js';
import { createElement } from '../method/MethodCreateElement.js';
import { createDiv } from '../method/divCreator.js';

const root = document.getElementById('root');

const wall = {
    feed: (divFeed) => {

        const wallContainer = createDiv('div', 'wallContainer', 'wallContainer');

        //Navigation Menu
        const navContainer = createDiv('div', 'navContainer', 'navContainer');
        
        //Logout button
        const logoutButton = createElement('button', 'logoutButton', 'logoutButton', '', 'Cerrar Sesión', '');
        logoutButton.addEventListener('click', () => {
            firebaseLogout();
        });


        //Body post
        const bodyContainer = createDiv('div', 'bodyContainer', 'bodyContainer');

        const inputPost = createElement('input', 'inputPost', 'inputPost', 'text', '¿Qué estás pensando?', '');
        const postButton = createElement('button', 'postButton', 'postButton', '', 'Publicar', '');






        navContainer.appendChild(logoutButton);
        bodyContainer.appendChild(inputPost);
        bodyContainer.appendChild(postButton);

        wallContainer.appendChild(navContainer);
        wallContainer.appendChild(bodyContainer);




        root.appendChild(wallContainer);









        return divFeed;
    }

}

export default wall;