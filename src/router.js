import LoginMethod from './loginYregister/home.js';
import wall from './Wall/wall.js';


const divrouter = document.createElement('div');

export const showTemplate = (hash, user) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';


  switch (hash) {
    case '':
      window.location.hash = '#/login';
      containerRoot == LoginMethod.login(divrouter);
      break;

    case '#/login':
      if (user) {
        window.location.hash = '#/wall';
        containerRoot == wall.feed(divrouter);
      } else {
        window.location.hash = '#/login';
        containerRoot == LoginMethod.login(divrouter);
      }
      break;

    case '#/wall':
      if (user) {
        window.location.hash = '#/wall';
        containerRoot == wall.feed(divrouter);
      } else {
        containerRoot == LoginMethod.login(divrouter);
        window.location.hash = '#/login';
      }
      break;

  }


};

export const changeRoute = (hash, user) => {

  return showTemplate(hash, user);

};