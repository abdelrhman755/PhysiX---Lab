//our variables
const massInput = document.getElementById('mass');
const velocityInput = document.getElementById('velocity');
const result = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

// when clicking on the button it will start the calculateMomentum function
calculateButton.addEventListener("click", calculateMomentum);


//calculateMomentum function
function calculateMomentum() {
    //checking if the user left the input fields empty
    if (massInput.value === "" || velocityInput.value === "") {
        result.textContent = "please enter a valid values";
        return;
    }

    //converting the inputs to numbers
    const mass = Number(massInput.value);
    const velocity = Number(velocityInput.value);
    
    //making sure that the mass can't be negative
    if (mass < 0) {
        result.textContent = "Mass can't be in negative sign";
        return;
    }

    //calculating the momentum
    const momentum = mass * velocity;

    //display the result on the screen
    result.textContent = `Momentum = ${momentum.toFixed(2)} Kg.m/s`;
}