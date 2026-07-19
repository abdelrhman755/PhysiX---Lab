// all my variables that i will use
//for canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
//inputs variables
const massInput = document.getElementById("mass");
const springInput = document.getElementById('spring');
const amplitudeInput = document.getElementById('amplitude');
const startBtn = document.getElementById("start");
const result = document.getElementById("amplitude");
// constants
const ceilingy = 40;
const centerx = canvas.width /2;
const equilibriumy = 180;
let animation = null;



//when the user click the button the function will start
startBtn.addEventListener('click', startSimulation);


function startSimulation (){
    // stop  any previous animation if there is
    if (animation) {
        cancelAnimationFrame(animation);
    }

    // making sure that the user enters a valid value
    if (massInput.value === "" || springInput.value === "" || amplitudeInput.value === "") {
        result.textContent = "please fill fields with valid values";
        return;
    }

    //converting the inputs to numbers to work on it
    const mass = Number(mass.Input.value);
    const k = Number(springInput.value);
    const amplitude = Number(amplitudeInput.value);

    //making sure that the mass, k, and amplitude is geater that 0
    if (mass <= 0) {
        result.textCont = "Mass must be greater than zero";
        return;
    }
    if(mass<=0) {
        result.textContent = "Spring constant must be greater than 0";
        return;
    }
    if (amplitude <= 0) {
        result.textContent = "Amplitude must be greater than 0";
        return;
    }

    // angular frequency
    const omega = Math.sqrt(k / mass);

    //period 
    const period = 2 * Math.PI / omega;


    // printing the period result to the user on the screen
    result.textContent = period.toFixed(2);
}