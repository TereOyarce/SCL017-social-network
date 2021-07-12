import LoginMethod from './Login/login.js';

const divLogin = document.createElement('div');

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#/login':
      containerRoot.appendChild(LoginMethod.login(divLogin));
      break;
    default:
      break;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  }
  return '';
};
