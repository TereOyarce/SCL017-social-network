import { createElement } from '../method/MethodCreateElement.js';


//POST A FIREBASE
export const database = firebase.firestore();

export const savePost = (description) => {
    database.collection('post').doc().set({
        description
    });
};

export const getPost = () => database.collection('post').get();

window.addEventListener('DOMContentLoaded', async (e) => {
    const arrayPost = await getPost();
    arrayPost.forEach(doc => {
    console.log(doc.data());
    })
});







