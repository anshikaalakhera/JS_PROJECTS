const form = document.getElementById("BMI-FORM");
const result = document.getElementById("RESULT");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const height = Number(document.getElementById("HEIGHT").value);
    const weight = Number(document.getElementById("WEIGHT").value);

    const bmi = weight / ((height / 100) ** 2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = `
        <p>Your BMI is: ${bmi.toFixed(2)}</p>
        <p>Category: ${category}</p>
    `;
});