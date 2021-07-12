import LoginMethod from './Login/login.js';

const divLogin = document.createElement('div');
export const changeRoute = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  }
  
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.appendChild(LoginMethod.login(divLogin));
  switch (hash) {
      case '#/login':
      containerRoot.appendChild(LoginMethod.login(divLogin));
      break;
        case '#':
        containerRoot.appendChild(LoginMethod.login(divLogin));
        break;
    default:
      break;
  }
};