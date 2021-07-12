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
     <div class='login id='login-screen'>
      <h1>¡HEllo!<h1>
      <p>probanding</p>
     </div>
    
    `;
    resDiv.innerHTML = pageLogin;
    return resDiv;
  },
  logOut: () => {

  },
};

export default LoginMethod;
