// Función para crear DIVS de manera rápida 

export const createDiv = (typeElement, id, classDiv) => {
    const newDiv = document.createElement(typeElement);
    newDiv.id = id;
    newDiv.classList.add(classDiv);
    
    return newDiv;
};