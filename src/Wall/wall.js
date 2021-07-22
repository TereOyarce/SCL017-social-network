import { firebaseLogout } from '../main.js';
import { createElement } from '../method/MethodCreateElement.js';
import { createDiv } from '../method/divCreator.js';
import { database } from './accessWall.js';
import { savePost } from './accessWall.js';
import { postContainer } from './accessWall.js';
import { form, inputPost, postButton } from './accessWall.js'
//import { getPost } from './accessWall.js';


const root = document.getElementById('root');

const wall = {
    feed: (divFeed) => {

        const wallContainer = createDiv('div', 'wallContainer', 'wallContainer');

        //Navigation Menu
        const navContainer = createDiv('div', 'navContainer', 'navContainer');

        const divImg = createDiv('div', 'divImg', 'divImg');
        const imgNook = createElement('img', 'imgNook', 'imgNook', '', '', './img/logo.png');
        const imgNookLink = document.createElement('a');
        imgNookLink.href = '#/wall';



        //Logout button
        const logoutButton = createElement('button', 'logoutButton', 'logoutButton', '', 'Salir', '');
        logoutButton.addEventListener('click', () => {
            firebaseLogout();
        });

        //Div nav footer SOLO VISTA MOVIL
        const navMobile = createDiv('div', 'navMobile', 'navMobile');
        const imgProfile = createElement('img', 'imgProfile', 'imgProfile', '', '', './img/porfileicon.png');
        const profileLink = document.createElement('a');
        profileLink.href = '#/profile';
        profileLink.appendChild(imgProfile);
        const imgHome = createElement('img', 'imgHome', 'imgHome', '', '', './img/homeprofile.png');
        const homeLink = document.createElement('a');
        homeLink.href = '#/wall';
        homeLink.appendChild(imgHome);

        const imgChat = createElement('img', 'imgChat', 'imgChat', '', '', './img/chatimg.png');
        const imgSearch = createElement('img', 'imgSearch', 'imgSearch', '', '', './img/searchicon.png');
        navMobile.appendChild(homeLink);
        navMobile.appendChild(imgSearch);
        navMobile.appendChild(imgChat);
        navMobile.appendChild(profileLink);
        //AQUI TERMINA DIV NAV VISTA MOVIL



        //Body post
        const bodyContainer = createDiv('div', 'bodyContainer', 'bodyContainer');
        bodyContainer.appendChild(navMobile);
        form.appendChild(inputPost);
        form.appendChild(postButton);
        divImg.appendChild(imgNookLink);
        imgNookLink.appendChild(imgNook)
        navContainer.appendChild(divImg);
        navContainer.appendChild(logoutButton);
        bodyContainer.appendChild(form);
        bodyContainer.appendChild(postContainer);


        wallContainer.appendChild(navContainer);
        wallContainer.appendChild(bodyContainer);

        root.appendChild(wallContainer);


        return divFeed;
    }

}

export default wall;