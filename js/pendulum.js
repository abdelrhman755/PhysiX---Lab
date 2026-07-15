// all the variables that i will use
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const lengthInput = document.getElementById('length');
const angleInput = document.getElementById("angle");
const startBtn = document.getElementById("start");
const periodBtn = document.getElementById("period");
const g = 9.81;
let animation = null;
const pivotx = canvas.width /2;
const pivoty = 70;


// when the user enter the start button the start simulation function will start
startBtn.addEventListener("click", startSimulation);


function startSimulation (){
    // if there is a previous animation stop it
    if (animation) {
        cancelAnimationFrame(animation);
    }

    // check if the user inters any inputs or not
    if (lengthInput.value === "" || angleInput.value === "") {
        alert("please fill all the fields with valid values.");
        return;
    }

    // convert the inputs values to numbers to work in it
    const length = Number(lengthInput.value);
    const angle = Number(angleInput.value);

    // the valid length must be greater than zero
    if(length <= 0) {
        alert("Length must be greater than zero.")
        return;
    }

    // calculate the pendulum period
    const period = 2 * Math.PI * Math.sqrt(length / g);
    period.textContent = period.toFixed(2);

    // convert meters to pixels 
    const ropeLength = length * 180;

    //angular frequency
    const omega = Math.sqrt(g / length);

    let t = 0;

    animate();

    function animate() {
        //clear canvas
        ctx.clearRect(0,0,canvas.width,canvas.height);

        // draw the background
        drawGrid();
        drawCeiling();

        //pendulum angle
        const theta = maxAngle * Math.cos(omega * time);

        //position
        const x = pivotx + ropeLength * Math.sin(theta);
        const y = pivoty + ropeLength * Math.cos(theta);

        // draw pendulum
        drawR(x,y);
        drawB(x,y);

        //increase time
        time += 0.02;

        //continue animation
        animation = requestAnimationFrame(animate);
    }
}

