import LoginMethod from './Login/home.js';
import wall from './Wall/wall.js';


const divLogin = document.createElement('div');

export const showTemplate = (hash, user) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';


    switch (hash) {
        case '':
            window.location.hash = '#/login';
            containerRoot == LoginMethod.login(divLogin);
            break;

        case '#/login':
            if (user) {
                window.location.hash = '#/wall';
                containerRoot == wall.feed(divLogin);
            } else {
                window.location.hash = '#/login';
                containerRoot == LoginMethod.login(divLogin);
            }
            break;

        case '#/wall':
            if (user) {
                window.location.hash = '#/wall';
                containerRoot == wall.feed(divLogin);
            } else {
                containerRoot == LoginMethod.login(divLogin);
                window.location.hash = '#/login';
            }
            break;

    }


};

export const changeRoute = (hash, user) => {
    /*  if (hash === '#/') {
          return showTemplate(hash);
      }
      if (hash === '#/login') {
          return showTemplate(hash);
      }
      if (hash === '#/wall') {
          return showTemplate(hash);
      }*/

    return showTemplate(hash, user);
    //return '';
};