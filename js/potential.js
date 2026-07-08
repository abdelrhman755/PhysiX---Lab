// the variables
const massInput = document.getElementById('mass');
const heightInput = document.getElementById('height');
const result = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

// when the user clicks the calculate button the potentialEnergy function will start working
calculateButton.addEventListener('click', potentialEnergy);


function potentialEnergy() {
    //lets detect if the user has entered a valid value in the input fields
    if (massInput.value === "" || heightInput.value === "") {
        result.textContent = 'please enter valid values';
        return;
    }

    // convert the input values to numbers
    const mass = Number(massInput.value);
    const height = Number(heightInput.value);

    // detect if the mass is in negative
    if (mass < 0) {
        result.textContent = "Mass can't be negative";
        return;
    }


    // detect if the height is in negative
    if (height < 0) {
        result.textContent = "Height can't be negative";
        return;
    }

    // gravitational acceleration constant
    const g = 9.81;

    // calculate the potential energy
    const potentialEnergy = mass * g * height;

    //display the result
    result.textContent = `Potential Energy = ${potentialEnergy.toFixed(2)} J`;
    
}