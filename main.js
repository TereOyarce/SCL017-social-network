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
    let success = document.getElementById("success");
    success.innerHTML = `<p>Registro exitoso, verificar email</p>`
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            // Email verification sent!
            // ...
        });

}


function observer() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            console.log('Active usser')
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            console.log('Inactive usser')
                // ...
        }
    });
}
observer();



import { myFunction } from './lib/index.js';
myFunction();