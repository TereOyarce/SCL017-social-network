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
    const resDiv = divLogin;
    const pageLogin = `
     <div class='login' id='login-screen'>
      
     <div class='head'>Logo y Nook-Nook </div>
     <div class='body'>Ingreso de usuarios ojo con botones, registro en web</div>
     <div class='footR'>Regristrate</div>

     <div class='onlyScreen'>Solo pantalla </div>


     </div>
    
    `;
    resDiv.innerHTML = pageLogin;
    return resDiv;
  },
  logOut: () => {

  },
};

export default LoginMethod;