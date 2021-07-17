const root = document.getElementById('root');
const wall = {

    feed: (divFeed) => {
        console.log('este es el muro');
        const div = document.createElement('div');
        const prueba = document.createElement('p');
        prueba.textContent = 'holaa';
        div.appendChild(prueba);
        root.appendChild(div);

        return divFeed;
    }

}
export default wall;