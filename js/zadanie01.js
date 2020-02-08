document.addEventListener("DOMContentLoaded", function () {
    getSqrt(4);
    console.log(`Dla 'getSqrt(4)' zwracam: ${getSqrt(4)}`);
    getSqrt(16);
    console.log(`Dla 'getSqrt(16)' zwracam: ${getSqrt(16)}`);
})

function getSqrt(number) {
    return Math.sqrt(number);
}