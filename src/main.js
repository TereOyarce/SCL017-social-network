// Este es el punto de entrada de tu aplicacion
//Ingreso de usuarios ya registrados

let signButton = document.getElementById("signButton");
signButton.addEventListener("click", () => {
    signIn();
});


function signIn() {
    let email = document.getElementById('email1').value;
    let password = document.getElementById('password1').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

//Registro Usuarios
let buttonR = document.getElementById("buttonRegister");

buttonR.addEventListener("click", () => {
    register();

});

function register() {
    let emailRegister = document.getElementById("email2").value;
    let passRegister = document.getElementById("password2").value;

    firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister)
        .then(function() {
            check()
        })
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
            console.log(errorCode);
        });
}

function check() {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            // Email verification sent!
            // ...
        });

}


import { myFunction } from './lib/index.js';

myFunction();