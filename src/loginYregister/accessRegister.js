export const register = (emailRegister, passRegister, sucess) => {
  const sucessCheck = sucess;

  function check(success) {
    const succCheck = success;
    succCheck.innerHTML = '<p>Registro exitoso, verificar email</p>';
    firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        alert('Registro exitoso, verificar email');

        // Email verification sent!
        // ...
      });
  }

  firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister)
    .then(() => {
      check(sucessCheck);
    })
    .then((userCredential) => {

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      alert(errorMessage);
      //alert(errorCode);
      console.log(errorMessage);

    });
};