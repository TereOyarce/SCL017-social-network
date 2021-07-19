const root = document.getElementById('root');

const wall = {
    feed: (divFeed) => {
        
        const div = document.createElement('div');
        const prueba = document.createElement('p');
        prueba.textContent = 'holaa';
        div.appendChild(prueba);
        root.appendChild(div);
        console.log('Dos veces?');
        return divFeed;
    }

}

export default wall;