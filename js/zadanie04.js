document.addEventListener("DOMContentLoaded", function () {
    console.log("Pokazuję wszystkie tablice w konsoli wraz z join(' '), żeby ładnie wyglądało. Funkcje zwracają poprawnie tablicę.")
    const sampleClassElements = document.querySelectorAll(".sample_class");
    console.log(`1. Zwracam takie tagi: ${getTagsOfElements(sampleClassElements).join(" ")}`)

    const sampleIdElement = document.getElementById("sample_id");
    console.log(`2. Zwracam tablicę klas: ${getClassesOfElement(sampleIdElement)}`)

    const listElements = document.querySelectorAll(".sample_class li");
    console.log(`3. Zwracam tablicę tekstów: ${getInnerTextsOfElements(listElements).join(" ")}`)

    const links = document.querySelectorAll("a");
    console.log(`4. Zwracam tablicę linków: ${getAddressesOfElements(links).join(" ")}`)

    const children = document.querySelectorAll(".sample_class_3");
    console.log(`5. Zwracam tablicę tagów: ${getTagsOfElements(children).join(" ")}`)
})


function getTagsOfElements(elements) {
    const tags = Array.from(elements).map(element => element.tagName);
    return tags;
}

function getClassesOfElement(element) {
    const classes = element.classList;
    return classes;
}

function getInnerTextsOfElements(elements) {
    const texts = Array.from(elements).map(element => element.innerHTML);
    return texts;
}

function getAddressesOfElements(elements) {
    const addresses = Array.from(elements).map(element => element.getAttribute("href"))
    return addresses;
}