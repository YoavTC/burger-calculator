// Get all the input elements by class name
const numberInputs = document.querySelectorAll('.parameter input[type="range"]');
const valueDisplays = document.querySelectorAll('.parameter .valueDisplay');

// Add event listeners for each input element
numberInputs.forEach((input, index) => {
    input.addEventListener("input", function() {
        // Set the value of the corresponding value display
        valueDisplays[index].textContent = input.value;
    });
});


const scoreText = document.querySelector('#score')
let score = 0

function calculateBurgerScore() {
    // Get the values from each input element
    const meatJuiciness = parseFloat(document.getElementById("meatJuiciness").value);
    const sauceTaste = parseFloat(document.getElementById("sauceTaste").value);
    const breadTaste = parseFloat(document.getElementById("breadTaste").value);
    const breadDurability = parseFloat(document.getElementById("breadDurability").value);
    const vegetableFreshness = parseFloat(document.getElementById("vegetableFreshness").value);
    const baconCheese = parseFloat(document.getElementById("baconCheese").value);
    const overallTaste = parseFloat(document.getElementById("overallTaste").value);

    // Calculate the burger score using the formula
    const burgerScore = (meatJuiciness + (sauceTaste * 1.5) + breadTaste + (breadDurability * 1.2) + vegetableFreshness + (overallTaste * 2.5) + (baconCheese * 1.2)) / 0.5;

    // Display the calculated score
    scoreText.textContent = "Score: " + burgerScore.toFixed(2);
}

function resetParameters() {
    document.getElementById("meatJuiciness").value = 0
    document.getElementById("sauceTaste").value = 0
    document.getElementById("breadTaste").value = 0
    document.getElementById("breadDurability").value = 0
    document.getElementById("vegetableFreshness").value = 0
    document.getElementById("baconCheese").value = 0
    document.getElementById("overallTaste").value = 0
    let valueDisplays = document.getElementsByClassName('valueDisplay');
    for (var i = 0; i < valueDisplays.length; i++) {
        var element = valueDisplays[i];
        element.innerHTML = "<span class=''valueDisplay''>0</span>"
    }
    scoreText.textContent = "Score: 0.00";
}