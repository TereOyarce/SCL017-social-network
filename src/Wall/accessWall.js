import { createElement } from '../method/MethodCreateElement.js';
import { createDiv } from '../method/divCreator.js';
import wall from './wall.js';



//POST A FIREBASE
export const database = firebase.firestore();

export const savePost = (description) => {
    database.collection('post').doc().set({
        description
    });
};

//Obtener data
export const getPost = () => database.collection('post').get();

//Obtener data en tiempo real
export const onGetPost = (callback) => database.collection('post').onSnapshot(callback);

//Borrar posts
export const deletePost = id => database.collection('post').doc(id).delete();



//Container donde caen los post
export const postContainer = document.createElement('div');
postContainer.id = 'postContainer';
postContainer.classList.add('postContainer');


window.addEventListener('DOMContentLoaded', async (e) => {
    onGetPost((arrayPost) => {
        postContainer.innerHTML = '';
        arrayPost.forEach(doc => {
            const task = doc.data();
                task.id = doc.id;
            
            const individualPost = createDiv('div', 'individualPost', 'individualPost');
                individualPost.innerHTML = `${doc.data().description}`;

            const editButton = createElement('button', 'editButton', 'editButton', '', 'Editar', '');

            const deleteButton = createElement('button', 'idButton', 'deleteButton', '', 'Eliminar', '');
                deleteButton.setAttribute('data-id', '${task.id}');
                deleteButton.className = 'btn';
            const btnDelete = document.querySelectorAll('.deleteButton');
                btnDelete.forEach(btn => {
                    idButton.addEventListener('click', async (e) => {
                    await deletePost(e.target.dataset.id);
                    console.log(btn);
                    });
                })
               
        
            postContainer.appendChild(individualPost);
            postContainer.appendChild(editButton);
            postContainer.appendChild(deleteButton);
        })
    })
    //const arrayPost = await getPost();
    
});







