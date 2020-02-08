document.addEventListener("DOMContentLoaded", function () {
    console.log(`Dla 'bigestSumOfTwoElements([1,2,3,4])' zwracam: ${bigestSumOfTwoElements([1, 2, 3, 4])}`);
    console.log(`Dla 'bigestSumOfTwoElements([])' zwracam: ${bigestSumOfTwoElements([])}`);
    console.log(`Dla 'bigestSumOfTwoElements([76])' zwracam: ${bigestSumOfTwoElements([76])}`);
    console.log(`Dla 'bigestSumOfTwoElements([23,45,17,12])' zwracam: ${bigestSumOfTwoElements([23, 45, 17, 12])}`);
})

function bigestSumOfTwoElements(array) {
    if (array.length === 0){
        return false;
    }
    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray.length === 1 ? sortedArray[0] : sortedArray.splice(0, 2).reduce((sum, number) => sum + number, 0);
}