// Ingreso de usuarios ya registrados
import { showTemplate, changeRoute } from './router.js';
import { googleAccess } from './Login/accessLogin.js';
import {} from './Login/accessRegister.js';
import wall from './Wall/wall.js'

const init = () => {

    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash);
    });
    window.location.hash = '#/login';
};

window.addEventListener('load', () => {
    changeRoute(window.location.hash);
    init();
});

const app = firebase.app();
console.log(app);

// Observador
function observer() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('Active usser');
            console.log(user.email);
            console.log(user.displayName);
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            //show(user);
            let emailVerified = user.emailVerified;
            const uid = user.uid;
            console.log(emailVerified);
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

function show(user) { //Función para mostrar en pantalla 'algo' sólo si el usuario que inicia sesión está verificado
    //let user = user;

    if (user.emailVerified && googleAccess) {
        showTemplate('#/wall');
    }
}