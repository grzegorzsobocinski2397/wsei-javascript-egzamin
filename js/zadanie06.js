document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    buttons[0].addEventListener('click', addBreadToList)
    buttons[1].addEventListener('click', removeLastElement)
    buttons[2].addEventListener('click', duplicateSecondElement)
})

function addBreadToList() {
    const list = document.querySelector("#shopping-list");
    const listElement = document.createElement("li");
    const textNode = document.createTextNode("chleb");
    listElement.appendChild(textNode);
    list.appendChild(listElement)
}

function removeLastElement() {
    const list = document.querySelector("#shopping-list");
    list.children[list.children.length - 1].remove()
}

function duplicateSecondElement() {
    const list = document.querySelector("#shopping-list");
    const secondElement = list.children[1].cloneNode(true)
    list.appendChild(secondElement);
}