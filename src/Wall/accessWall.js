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


window.addEventListener('DOMContentLoaded', async(e) => {
    onGetPost((arrayPost) => {
            postContainer.innerHTML = '';
            arrayPost.forEach((doc) => {
                const task = doc.data();
                task.id = doc.id;
                console.log(task.id);


                const individualPost = createDiv('div', 'individualPost', 'individualPost');
                individualPost.innerHTML += `${doc.data().description}`;

                const editButton = createElement('button', 'editButton', 'editButton', '', 'Editar', '');

                const buttonDelete = createElement('button', 'deleteButton', 'deleteClassButton', '', 'Eliminar', '');
                buttonDelete.classList.add('btn');
                buttonDelete.setAttribute('data-id', task.id);

                const btnDelete = document.querySelectorAll('.deleteClassButton');
                btnDelete.forEach(btn => {
                    btn.addEventListener('click', async(e) => {
                        await deletePost(e.target.dataset.id);

                    });
                })


                postContainer.appendChild(individualPost);
                postContainer.appendChild(editButton);
                postContainer.appendChild(buttonDelete);
            })
        })
        //const arrayPost = await getPost();

});