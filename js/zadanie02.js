document.addEventListener("DOMContentLoaded", function () {
    console.log(`Dla 'concatArray([1,3],[3,5])' zwracam: ${concatArray([1,3],[3,5])}`);
})

function concatArray(array1, array2) {
    return [...array1, ...array2];
}