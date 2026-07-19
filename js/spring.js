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

    const scale = 60; //the scale

    let t = 0;

    animate();



    // the animate function that will be called 
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the previous frame before drawing
        drawGrid(); //calling the function that will draw the grid
        drawCeiling();// the same for ceiling


        // calculate the displacement by the SHM equation
        const displacement = amplitude * Math.cos(omega * t);

        //calc the current vertical position of the mass
        const y = equilibriumy + displacement * scale;

        drawSpring(centerx, ceilingy, y); // draw the mass

        t += 0.02; // this moves the frame by inc the time

        animation = requestAnimationFrame(animate); // this will make the animation continue
    }
}

// the function that will draw the ceiling
// i explained this code to much so if you faced a problem to understand go to any another js file in this project
function drawCeiling(){
    ctx.beginPath();
    ctx.moveTo(0, ceilingy);
    ctx.lineTo(canvas.width, ceilingy);
    
    //its style
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#888";

    //to render
    ctx.stroke();
}

// the function that will draw the spring
function drawSpring (x, tp, bttm) {
    //some variables that i will need
    const coils = 20; // number of the spring coils
    const width = 20; // width of each coil
    const step = (bttm - tp) / coils; // the dis between every two coils

    // now lets draw the spring
    ctx.beginPath();
    ctx.moveTo(x, top);
    for (let i = 1; i < coils; i++) { // this draw the zigzag spring coils
        const xx = i % 2 === 0 ? x - width : x + width;
        ctx.lineTo(xx, tp + i * step);
    }

}