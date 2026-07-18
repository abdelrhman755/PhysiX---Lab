// all my variables
//for canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//input fields
const heightInput = document.getElementById("height");
const startBtn = document.getElementById("start");
// result varaible
const result = document.getElementById("result");
// constants
const g = 9.81;
// the animation id
let animation = null;
// the ground position
const groundy = canvas.height - 40;



// when the user clicks the button the animation will start
startBtn.addEventListener("click", startFall);


function startFall() {
    // first stop any previous animation
    if (animation) {
        cancelAnimationFrame(animation);
    }

    //check if the input fields are empty
    if (heightInput.value === "") {
        result.textContent = "Please enter a value for height"
        return;
    }

    //convert the input data to numbers to work on it
    const height = Number(heightInput.value);

    // make sure that height value is positive
    if (height < 0) {
        result.textContent = "Height can't be negative"
        return;
    }

    //if the height is equal 0
    if (height === 0) {
        result.textContent = "Object is already on the ground";
        return;
    }

    //calculate the fall time
    const time = Math.sqrt((2 * height) / g);

    // convert meters to pixels
    const scale = 3;

    const starty = groundy - height * scale;

    let t = 0

    animate();


    function animate () {
        // first clear any previous frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        drawGround();

        //distance that travelled
        const distance = 0.5 * g * t * t;

        // the position of the ball
        let y = starty + distance * scale;

        if (y > groundy) {
            y = groundy;
        }

        // draw the ball
        drawBall(canvas.width /2, y);

        //increas the time
        t+= 0.02

        // keep animation until the ball reaches the ground
        if (y < groundy) {
            animation = requestAnimationFrame(animate);
        } else {
            //display the total falling time after teh animation ends
            result.textContent = `Fall Time = ${time.toFixed(2)} s`
        }
    }
}


