import {login} from './view/login.js';

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
  
    switch (hash) {
      case '#/login':
        containerRoot.appendChild(login());
        break;
    }
};

export const changeRoute = (hash) => {
    if (hash === '#/login') {
      return showTemplate(hash);
    }
};