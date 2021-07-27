import { showTemplate, changeRoute } from './router.js';
import { googleAccess } from './Login/accessLogin.js';
import {} from './Login/accessRegister.js';


const init = () => {
    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash, userActive);
    });

};

window.addEventListener('load', () => {
    changeRoute(window.location.hash, userActive);
});

let userActive;
const app = firebase.app();
console.log(app);

// Observador
export function observer() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            userActive = user;
            console.log('Active user');
            console.log(user.email);
            console.log(user.displayName);
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            show(user);
            let emailVerified = user.emailVerified;
            const uid = user.uid;
            console.log(emailVerified);
            console.log(uid);
            // ...
        } else {
            // User is signed out
            console.log('Inactive user');
            // ...
        }

    });
}
observer();


//Logout
export const firebaseLogout = () => {
    firebase.auth().signOut()
        .then(() => {
            showTemplate('#/login', null);
        })
        .catch((error) => {
            console.error(error);
        });
};



export function show(user) { //Función para mostrar en pantalla 'algo' sólo si el usuario que inicia sesión está verificado
    //let user = user;
    if (user.emailVerified && googleAccess) {
        showTemplate('#/wall', user);
    } else {
        showTemplate('', user);
    }
};


