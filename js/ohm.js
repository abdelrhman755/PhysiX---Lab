// my variables that i will use to get the values from the input fields
const intensityInput = document.getElementById('intensity');
const resistanceInput = document.getElementById('resistance');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');


// when the user clicks the calculate button, the calculatevoltage function will be called to start
calculateButton.addEventListener('click', calculateVoltage);


//calculateVoltage function that will be called 
function calculateVoltage() {
    // detect if the user inters anys values in the input fields
    if (intensityInput.value === '' || resistanceInput.value === '') {
        result.textContent = 'please enter values for bothe intensity and resistance';
        return;
    }

    // change values from string to number 
    const intensity = Number(intensityInput.value);
    const resistance = Number(resistanceInput.value);


    //now i will detect if the user inters a negative value in the input fields
    // for the intensity input field
    if (intensity < 0) {
        result.textContent = "Intensity can't be a negative value";
        return;
    }

    // for the resistance input field
    if (resistance < 0) {
        result.textContent = "Resistance can't be a negative value";
        return;
    }

    // now detect if the intnesity or the resistance are equal to 0
    if (intensity === 0 || resistance === 0) {
        result.textContent = "Voltage = 0 V";
        return;
    }

    // now i will calculate the voltage using its formula
    const voltage = intensity * resistance;

    // now i will display the result for the user
    result.textContent = `Voltage = ${voltage.toFixed(2)} V`;
}