import { createElement } from '../method/MethodCreateElement.js';
import { createDiv } from '../method/divCreator.js';


//POST A FIREBASE

export const database = firebase.firestore();
let editStatus = false;
let id = '';
let userId = '';

//Form
export const form = document.createElement('form');
form.id = 'formId';


//¿Qué estás pensando?
export const inputPost = document.createElement('textarea');
document.createElement('textarea');
inputPost.id = 'inputPost';
inputPost.classList.add('inputPost;');
inputPost.placeholder = '¿Qué estás pensando?'
export const postButton = createElement('button', 'postButton', 'postButton', '', 'Publicar', '');


//Likes

export const savePost = (description, date, userId) => {
    let userLike = [];
    let likes = 0;
    database.collection('post').doc().set({
        description,
        date,
        userId,
        userLike,
        likes
    });
};

//Obtener data
export const getPost = () => database.collection('post').get();

export const getDocById = (id) => database.collection('post').doc(id).get();

//Obtener data en tiempo real
export const onGetPost = (callback) => database.collection('post').orderBy("date", "desc").onSnapshot(callback);

//Borrar posts
export const deletePost = id => database.collection('post').doc(id).delete();

//Actualizar post
export const updatePost = (id, updatedPost) => database.collection('post').doc(id).update(updatedPost);


//Publicar post
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const description = form['inputPost'].value;
    console.log(description);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    today = dd + '/' + mm + '/' + yyyy + ' ' + time;
    userId = firebase.auth().currentUser.email;
    console.log(userId);
    // console.log(timenow);
    await savePost(description, today, userId);


    editStatus = false;
    id = '';
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
            console.log(task);
            task.id = doc.id;
            console.log(task.id);
            let userActive = firebase.auth().currentUser.email;


            const individualPost = createDiv('div', 'individualPost', 'individualPost');
            individualPost.setAttribute('contenteditable', false);
            individualPost.setAttribute('data-id', task.id);

            const likeButton = createElement('button', 'likeButton', 'likeButton', '', '♥like', '');
            likeButton.classList.add('btn');
            likeButton.setAttribute('data-id', task.id);

            const editButton = createElement('button', 'editButton', 'editClassButton', '', 'Editar', '');
            editButton.classList.add('btn');
            editButton.setAttribute('data-id', task.id);

            const buttonDelete = createElement('button', 'deleteButton', 'deleteClassButton', '', 'Eliminar', '');
            buttonDelete.classList.add('btn');
            buttonDelete.setAttribute('data-id', task.id);
            const containerButton = createDiv('div', 'containerButton', 'containerButton');

            const infoStamp = document.createElement('p');
            infoStamp.innerHTML = task.userId + '&nbsp; ' + '&nbsp;' + task.date;
            individualPost.appendChild(infoStamp);
            postContainer.appendChild(individualPost);

            postContainer.appendChild(containerButton);
            containerButton.appendChild(likeButton);

            if (userActive == task.userId) {
                containerButton.appendChild(editButton);
                containerButton.appendChild(buttonDelete);

            }

            individualPost.innerHTML += task.description, editButton, buttonDelete;

        })

        const btnDelete = document.querySelectorAll('.deleteClassButton');
        btnDelete.forEach(btn => {
            btn.addEventListener('click', async(e) => {
                const doc = await deletePost(e.target.dataset.id);
                const task = doc.data();
                let userActive = firebase.auth().currentUser.email;
                if (userActive == task.userId) {
                    id = doc.id;

                }
            })
        });

        const btnEdit = document.querySelectorAll('.editClassButton');

        btnEdit.forEach(btn => {

            btn.addEventListener('click', async(e) => {

                const doc = await getDocById(e.target.dataset.id)
                const task = doc.data();
                let userActive = firebase.auth().currentUser.email;
                if (userActive == task.userId) {
                    id = doc.id;
                    console.log(userActive);
                    if ([...individualPost].length > 0) {
                        [...individualPost].forEach(post => {
                            console.log(post.getAttribute('data-id'));
                            if (post.getAttribute('data-id') == id) {
                                if (btn.innerText == 'Editar') {
                                    post.focus();
                                    post.contentEditable = true;
                                    editStatus = true;
                                    btn.innerText = 'Guardar';

                                } else if (btn.innerText == 'Guardar') {
                                    post.focus();
                                    post.contentEditable = false;
                                    editStatus = false;
                                    btn.innerText = 'Editar';

                                    updatePost(id, {
                                        description: post.innerHTML
                                    })
                                }
                            }
                        })
                    } else { //En el caso de ser un post,hacer esto
                    }

                } else {
                    console.log('noo');

                }
            })
        })


        //Like
        const btnLike = document.querySelectorAll('.likeButton');


        btnLike.forEach(btn => {

            btn.addEventListener('click', async(e) => {

                //GET DOCU BY ID (E.TARGET.DATASET.ID)
                const doc = await getDocById(e.target.dataset.id)
                    //POSTS - ArrayPosts getIdlistPost arrPost 
                const task = doc.data();
                let userActive = firebase.auth().currentUser.email;
                if (userActive) {
                    id = doc.id;
                    if ([...individualPost].length > 0) {
                        [...individualPost].forEach(post => {

                            if (post.getAttribute('data-id') == id) {
                                if (btn.innerText == '♥like') {

                                    var n = task.userLike.includes(userActive);
                                    console.log("EL USUARIO " + userActive + "LE DIO LIKE " + n);

                                    btn.innerText = '♥dislike';

                                } else if (btn.innerText == '♥dislike') {
                                    // const userLike = [];
                                    let userLike = task.userLike;

                                    btn.innerText = '♥like';

                                    // updatePost(id, {
                                    //     description: post.innerHTML
                                    // })
                                }
                            }
                        })
                    } else { //En el caso de ser un post,hacer esto
                    }

                } else {
                    console.log('noo');

                }
            })
        })

    })
});