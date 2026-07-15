//my variables that i will use to draw the projectile
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const speedInput = document.getElementById("speed");
const angleInput = document.getElementById("angle");
const launchBtn = document.getElementById("start");
const g = 9.81; // this is the gravity 
const startx = 40;
const groundy = canvas.height - 40;
let animation = null;

// when the user clicks on launch the function i will write will start working
launchBtn.addEventListener("click", launch);


// launce function
function launch() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }

    // detect if the user put any values in the input fields
    if (speedInput.value === "" || angleInput.value === "") {
        alert("Please fill all fields with valid values");
        return;
    }

    //convert the values from text to numbers to make it workable
    const speed = Number(speedInput.value);
    const angle = Number(angleInput.value);


    // speed at x and y angles
    const vx = speed * Math.cos(angle);
    const vy = speed * Math.sin(angle);

    // scale of the motion
    const scale = 5;

    //start from zero
    let t = 0;

    animate();

    function animate(){
        //clear the previous frame before start
        ctx.clearRact(0,0,canvas.clientWidth,canvas.height);

        // draw the background and ground grid
        drawGrid();
        drawGround();

        // calculate the projectile position by the motion equations
        const x = startx + vx * t * scale;
        const y = groundy - (vy * t -0.5 * g * t * t) * scale;

        // draw the projectile at its position
        drawBall(x,y);

        // move to the next frame by increasing time
        t += 0.02;

        //continue the animation while the projectile is above the ground
        if (y <= groundy && x <= canvas.width) {
            animationId = requestAnimationFrame(animate);
        }
    }
}


// draw the projected ball
function drawBall(x,y) {
    // making a new shape
    ctx.beginPath();
    // making a circle at teh projectile possition
    ctx.arc(x,y,8,0,Math.PI*2);
    ctx.fillStyle= "#3abff8"; // color of the projectile
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#3abff8";
    ctx.fill();
    ctx.shadowBlur = 0;
}

//draw the ground line
function drawGround() {
    // the new path
    ctx.beginPath();
    // ground starts from the left side
    ctx.moveTo(0,groundy)
    // draw it across the whole canvas
    ctx.lineTo(canvas.width,groundy);
    //style
    ctx.storkeStyle="#999";
    ctx.lineWidth=3;
    ctx.stroke();
}


// draw a grid in the background to make the projectile easier to follow
function drawGrid(){
    // its style
    ctx.storkeStyle= "rgba(255,255,255,0.8)";
    ctx.lineWidth =1;

    // vertical grid lines
    for (let x = 0; x<= canvas.width; x+=40){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }


    // horizontal grid lines
    for (let y=0; y <= canvas.height; y+= 40){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        ctx.stroke();
    }
}