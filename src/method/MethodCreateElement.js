// Función para crear elementos de manera rápida 
export const createElement = (typeElement, id, classElement, type, text, src) => {
    const newElement = document.createElement(typeElement);
    newElement.id = id;
    newElement.classList.add(classElement);
    switch (typeElement) {
        case 'input':
            newElement.setAttribute('type', type);
            newElement.setAttribute('placeholder', text);
            break;
        case 'button':
            newElement.innerHTML = text;
            break;
        case 'img':
            newElement.setAttribute('src', src);
            break;
    }
    return newElement;
}