export const LoginMethod = {
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
        <div class='head'> 
            <img src="img/logo.png" class="logo">
            <h1>Nook-Nook</h1>
        </div> 
        <div>
        
        </div>
        <div>
        
        </div>
     
     </div>
      
      `;
      resDiv.innerHTML = pageLogin;
      return resDiv;
  },
  logOut: () => {

  },
};

export default LoginMethod;
