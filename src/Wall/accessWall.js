import { createElement } from '../method/MethodCreateElement.js';
import { createDiv } from '../method/divCreator.js';


//POST A FIREBASE
export const database = firebase.firestore();
let editStatus = false;
let id = '';

export const form = document.createElement('form');
form.id = 'formId';

export const inputPost = createElement('input', 'inputPost', 'inputPost', 'text', '¿Qué estás pensando?', '');
export const postButton = createElement('button', 'postButton', 'postButton', '', 'Publicar', '');

export const savePost = (description) => {
    database.collection('post').doc().set({
        description
    });
};

//Obtener data
export const getPost = () => database.collection('post').get();

export const getId = (id) => database.collection('post').doc(id).get();

//Obtener data en tiempo real
export const onGetPost = (callback) => database.collection('post').onSnapshot(callback);

//Borrar posts
export const deletePost = id => database.collection('post').doc(id).delete();

//Actualizar post
export const updatePost = (id, updatedPost) => database.collection('post').doc(id).update(updatedPost);


//Publicar post
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const description = form['inputPost'].value;
    console.log(description);
    if (!editStatus) {
        await savePost(description);
    } else {
        await updatePost(id, {
            description: description,
        })
        editStatus = false;
        id = '';
        form['postButton'].innerText = 'Publicar';


    }
    //await getPost();
    form.reset();

})

//Container donde caen los post
export const postContainer = document.createElement('div');
postContainer.id = 'postContainer';
postContainer.classList.add('postContainer');


//Manejar los post
window.addEventListener('DOMContentLoaded', async(e) => {
    onGetPost((arrayPost) => {
        postContainer.innerHTML = '';
        arrayPost.forEach((doc) => {
            const task = doc.data();
            task.id = doc.id;
            console.log(task.id);


            const individualPost = createDiv('div', 'individualPost', 'individualPost');
            const editButton = createElement('button', 'editButton', 'editClassButton', '', 'Editar', '');
            editButton.classList.add('btn');
            editButton.setAttribute('data-id', task.id);

            const buttonDelete = createElement('button', 'deleteButton', 'deleteClassButton', '', 'Eliminar', '');
            buttonDelete.classList.add('btn');
            buttonDelete.setAttribute('data-id', task.id);
            postContainer.appendChild(individualPost);
            postContainer.appendChild(editButton);
            postContainer.appendChild(buttonDelete);

            individualPost.innerHTML += task.description, editButton, buttonDelete;

        })

        const btnDelete = document.querySelectorAll('.deleteClassButton');
        btnDelete.forEach(btn => {
            btn.addEventListener('click', async(e) => {
                await deletePost(e.target.dataset.id);
            })
        });

        const btnEdit = document.querySelectorAll('.editClassButton');
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async(e) => {
                const doc = await getId(e.target.dataset.id)
                const task = doc.data();

                editStatus = true;
                id = doc.id;

                form['inputPost'].value = task.description;
                form['postButton'].innerText = 'Actualizar';
            })
        })

    })
});