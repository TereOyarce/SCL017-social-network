export const register = (emailRegister, passRegister, sucess) => {
    const sucessCheck = sucess;

    function check(success) {
        const succCheck = success;
        succCheck.innerHTML = '<p>Registro exitoso, verificar email</p>';
        firebase.auth().currentUser.sendEmailVerification()
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister)
        .then(() => {
            check(sucessCheck);
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
};