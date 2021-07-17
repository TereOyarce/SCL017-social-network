import LoginMethod from './Login/home.js';

const divLogin = document.createElement('div');

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (hash) {
        case '#/':
            containerRoot == LoginMethod.login(divLogin);

            break;
        case '#/login':
            containerRoot == LoginMethod.login(divLogin);
            break;

            /*default:
              containerRoot.innerHTML = `
            <h2>No se han encontrado resultados:</h2>
                `;*/
            /* default:
               break;*/
    }
};

export const changeRoute = (hash) => {
    if (hash === '#/') {
        return showTemplate(hash);
    }
    if (hash === '#/login') {
        return showTemplate(hash);
    }
    return showTemplate(hash);
    //return '';
};