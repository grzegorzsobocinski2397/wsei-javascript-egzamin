document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => button.addEventListener("click", clickEvent.bind(button)));
})

function clickEvent() {
    const div = document.getElementById("container");
    div.innerHTML = this.getAttribute("data-text");
}