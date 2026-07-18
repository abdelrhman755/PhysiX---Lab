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
    const maxAngle = Number(angleInput.value) * Math.PI / 180;

    // the valid length must be greater than zero
    if(length <= 0) {
        alert("Length must be greater than zero.")
        return;
    }

    // calculate the pendulum period
    const period = 2 * Math.PI * Math.sqrt(length / g);
    periodBtn.textContent = period.toFixed(2);

    // convert meters to pixels 
    const maxLength = canvas.height - pivoty - 30;
    const ropeLength = Math.min(length * 25, maxLength);

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
        const theta = maxAngle * Math.cos(omega * t);

        //position
        const x = pivotx + ropeLength * Math.sin(theta);
        const y = pivoty + ropeLength * Math.cos(theta);

        // draw pendulum
        drawR(x,y);
        drawB(x,y);

        //increase time
        t += 0.02;

        //continue animation
        animation = requestAnimationFrame(animate);
    }
}

// function that will draw the ceiling
function drawCeiling () {
    ctx.beginPath();
    ctx.moveTo(0, pivoty);
    ctx.lineTo(canvas.width, pivoty);
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 4;
    ctx.stroke();
}


// the function that will draw the rope
function drawR(x,y) {
    ctx.beginPath();
    ctx.moveTo(pivotx, pivoty);
    ctx.lineTo(x,y);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.stroke();
}


// writing the function that will draw the pendulum bob
function drawB(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#3abff8";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#3abff8";
    ctx.fill();
    ctx.shadowBlur = 0;

    //draw the pivot
    ctx.beginPath();
    ctx.arc(pivotx, pivoty, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#fc3d21";
    ctx.fill();
}

// writing the function that will draw the grid
function drawGrid () {
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x , 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }


    for (let y = 0; y <= canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// الحمد لله يعني بحب الهاااك كلاب