// Ingreso de usuarios ya registrados
import { changeRoute } from './router.js';
import {} from './Login/accessLogin.js';
import {} from './Register/accessRegister.js';



const init = () => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = "hola";
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
  window.location.hash = '#/login';
  
};
const app = firebase.app();
console.log(app);
window.addEventListener('load', init);

// Observador
function observer() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('Active usser');
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      console.log('Inactive usser');
      // ...
    }
  });
}
observer();
