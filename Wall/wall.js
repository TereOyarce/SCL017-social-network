import { firebaseLogout } from '../main.js';
import { createElement } from '../method/MethodCreateElement.js';
import { createDiv } from '../method/divCreator.js';
import { database } from './accessWall.js';
import { savePost } from './accessWall.js';
//import { getPost } from './accessWall.js';


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

        const form = document.createElement('form');
        form.id = 'formId';

        const inputPost = createElement('input', 'inputPost', 'inputPost', 'text', '¿Qué estás pensando?', '');
        const postButton = createElement('button', 'postButton', 'postButton', '', 'Publicar', '');

        
        

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const description = form['inputPost'].value;
            await savePost(description);
            form.reset();
            console.log(description);
        })




        form.appendChild(inputPost);
        form.appendChild(postButton);

        navContainer.appendChild(logoutButton);
        bodyContainer.appendChild(form);

        wallContainer.appendChild(navContainer);
        wallContainer.appendChild(bodyContainer);




        root.appendChild(wallContainer);


        return divFeed;
    }

}

export default wall;