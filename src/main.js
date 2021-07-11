// Ingreso de usuarios ya registrados

import { myFunction } from './lib/index.js';

const signButton = document.getElementById('signButton');

function signIn() {
    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
signButton.addEventListener('click', () => {
    signIn();
});

// Registro Usuarios

const buttonR = document.getElementById('buttonRegister');

function register() {
    const emailRegister = document.getElementById('email2').value;
    const passRegister = document.getElementById('password2').value;

    function check() {
        const success = document.getElementById('success');
        success.innerHTML = '<p>Registro exitoso, verificar email</p>';
        firebase.auth().currentUser.sendEmailVerification()
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister)
        .then(() => {
            check();
        })
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage);
        });
}
buttonR.addEventListener('click', () => {
    register();
});

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
signIn();