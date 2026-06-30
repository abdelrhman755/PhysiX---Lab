// my variables
const distanceInput = document.getElementById("distance");
const timeInput = document.getElementById("time");
const result = document.getElementById("result");
const calculateButton = document.getElementById("calculate");


//when clicking on the button it will start the calculatevelocity function
calculateButton.addEventListener("click", calculateVelocity);

// calcaulate velocity function
function calculateVelocity() {
    // detect first if the user didn't write anything 
    if (distanceInput.value ==="" || timeInput.value === "") {
        result.textContent = "Please enter valid values";
        return;
    }

    // if he write we will save the numbers in two variables
    const distance = Number(distanceInput.value);
    const time = Number(timeInput.value);

    //if he write let's see = if distance and time both =0, because I tried it on the calculator and it gives me math error hhhh
    if (distance === 0 && time === 0) {
        result.textContent = "0 devide 0 is undefined.";
        return;
    }

    // then lets check every one of them lonly this is for distance
    if (distance === 0) {
        result.textContent = result.textContent = "Velocity = 0 m/s";
        return;
    }

    // and this is for time
    if(time === 0) {
        result.textContent = `Time can't be 0`;
        return;
    }

    // the law of the velocity
    const velocity = distance / time;

    // finally print the final value
    result.textContent = `Velocity = ${velocity.toFixed(2)} m/s`;
}