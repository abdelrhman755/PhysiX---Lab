// our variables
const massInput = document.getElementById('mass');
const velocityInput = document.getElementById('velocity');
const result = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

// when the user clicks on the button the calculateKinetic function will start
calculateButton.addEventListener('click', calculateKinetic);

// the calculatekinetic function
function calculateKinetic() {
    // checking that the user has entered valid inputs
    if (massInput.value === "" || velocityInput.value === "") {
        result.textContent = "please enter a valid inputs";
        return;
    }

    // changing the inputs vaues to numbers
    const mass = Number(massInput.value);
    const velocity = Number(velocityInput.value);

    // making sure that the mass is not negative
    if (mass < 0) {
        result.textContent = "mass can't be in negative";
        return;
    }

    // calculate kinetic energy
    const kineticEnergy = 0.5 * mass * velocity * velocity;
    
    //display the result for the user
    result.textContent = `The Kinetic Energy is ${kineticEnergy.toFixed(2)} J`;
}