import classLogin from './login.js';


//Iniciar Sesión
export const normalAccess = (email, pass) => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
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
};

//Iniciar sesión con Google
export const googleAccess = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          let credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = credential.accessToken;
          // The signed-in user info.
          let user = result.user;
          // ...
      }).catch((error) => {
          console.log(error);
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
      });
};











//const signButton = document.getElementById('signButton');



/*signButton.addEventListener('click', () => {
  const email = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  classLogin.signIn(email, password);
});*/         

/*// Google 
const buttonGoogle = document.getElementById("googleButton");
buttonGoogle.addEventListener('click' , ()=>{
  classLogin.loginGoogle();
});*/


// Google 
/*const buttonGoogle = document.getElementById("googleButton");
buttonGoogle.addEventListener('click', () => {
    classLogin.loginGoogle();
});*/

/*export const funciona = () => {
    console.log('porfavor funciona u, u');
}*/
