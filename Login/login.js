const LoginMethod = {
  signIn: (email, pass) => {
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

    
      },
     
    
  login: (divLogin) => {
    const divRoot = document.getElementById('root');
    const contDivLogin = document.createElement('div');
    divRoot.appendChild(contDivLogin);
    const resDiv = divLogin;
    const pageLogin = 
    
    `
     <div class='login' id='login-screen'>
      
     <div class='onlyScreen'>
      <img src="img/houseac.png" class="imgNooks">
     </div>

     <div class='wat'>
     <div class='head'>Logo y Nook-Nook </div>
     <div class='body'>Ingreso de usuarios ojo con botones, registro en web</div>
     <a href="#" class='registerLink' id="registerLink">¿No tienes Cuenta?<br>
Regístrate Aquí</a>
     </div>
     
     


     </div>
    
    `;
    //contDivLogin.appendChild(pageLogin);
    resDiv.innerHTML = pageLogin;
    return resDiv;
  }, 


  logOut: () => {

  },
  loginGoogle: () => {
    //Acceso Google 
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
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });

  }
};



export default LoginMethod;