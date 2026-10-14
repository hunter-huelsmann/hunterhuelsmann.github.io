function ChangeMediaSlot(currentElementId, elementId, event) {
    event.preventDefault();
    const element = document.getElementById(elementId);
    const currentElement = document.getElementById(currentElementId);

    element.style.display = 'flex';
    currentElement.style.display = 'None';
}

document.addEventListener('DOMContentLoaded', () => {
    const mediaElements = document.getElementsByClassName('.media-element');

    mediaElements.forEach(element => {
        element.style.display = 'None';
    });

    const firstMediaElements = document.getElementsByClassName('.first-element');

    firstMediaElements.forEach(element => {
        element.style.display = 'flex';
    });
});