// all the variables that i will use
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const amplitudeInput = document.getElementById("amplitude");
const frequencyInput = document.getElementById("frequency");
const wavelengthInput = document.getElementById("wavelength");
const startBtn = document.getElementById("start");
const result = document.getElementById("result");
let animation = null;
const centery = canvas.height / 2;


//start simulation when click the button
startBtn.addEventListener("click", startSimulation);


function startSimulation () {
    if (animation) {
        cancelAnimationFrame(animation);
    }
    
    //check if the fields is empty
    if (amplitudeInput.value === "" || frequencyInput.value === "" || wavelengthInput.value === "") {
        result.textContent = "please fill all fields with a valid values";
        return;
    }

    // convert input values to numbers
    const amplitude = Number(amplitudeInput.value);
    const frequency = Number(frequencyInput.value);
    const wave = number(wavelengthInput.value);

    // some detection to make sure that the all our inputs are greater than zero
    if (amplitude <= 0) {
        result.textContent = "Amplitude must be greater than 0";
        return;
    }

    if (frequency <= 0) {
        result.textContent = "Frequency must be greater than 0";
        return;
    }

    if (wave <= 0) {
        result.textContent = 'Wavelength must be greater than 0';
        return;
    }

    
}