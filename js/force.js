//our variables
const massInput = document.getElementById("mass");
const accelerationInput = document.getElementById("acceleration");
const result = document.getElementById("result");
const calculateButton = document.getElementById("calculate");

//when clicking on the button it will start the calculateforce function
calculateButton.addEventListener("click", calculateForce);


function calculateForce() {
    //check if the user left any field empty
    if(massInput.value === "" || accelerationInput.value === "") {
        result.textContent = "Please Enter valid values"
        return;
    }

    //if he enters a valid values then lets convert the inputs to numbers
    const mass = Number(massInput.value);
    const acceleration = Number(accelerationInput.value);

    // now i need to detect for many things

    

    //see if the mass is with negative(it is not allowed)
    if (mass <0) {
        result.textContent = "Mass can't be negative";
        return;
    }

    // calculate the force using its law
    const force = mass * acceleration;

    // print the result on the screen
    result.textContent = `Force = ${force.toFixed(2)} N`;
}