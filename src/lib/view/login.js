export const login = () => {
    const divLogin = document.createElement('div');

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
    `
divLogin.innerHTML = pageLogin;
return divLogin;
}
