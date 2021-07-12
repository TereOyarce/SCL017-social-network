import LoginMethod from './Login/login.js';

const divLogin = document.createElement('div');

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/login':
      containerRoot.appendChild(login(divLogin));
      break;
      case '#/':
        containerRoot.appendChild(login(divLogin));
        break;
      default:
        containerRoot.appendChild(errorPage());
    }
};

export const changeRoute = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  }
  if (hash === '#/') {
    return showTemplate(hash);
  }
  //return '';
  return showTemplate(hash);
};
