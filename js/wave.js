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

    const speed = frequency * wave; // wave speed
    result.textContent = speed.toFixed(2); // display the result
    const amplitudeScale = amplitue * 40; //convert amplitude to pixels
    const k = (2 * Math.PI) / (wave * 40); // wave number
    const omega = 2 * Math.PI * frequency; // angular frequency
    let t = 0;
    animate();

    function animate () {
        //clear the previous frame
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

        drawGrid(); // draw the background
        drawCenLin(); // draw the center line
        drawWave(amplitudeScale, k, omega, t); // draw the wave
        t += 0.02; // increase time
        animation = requestAnimationFrame(animate);
    }
}

// draw the wave function
function drawWave(amplitude, k, omega, t){
    ctx.beginPath();
    for (let x = 0; x<= canvas.clientWidth; x++) {
        const y = centery + amplitude * Math.sin(k * x - omega * time);
        if ( x === 0) {
            ctx.moveTo(x,y);
        } else {
            ctx.lineTo(x,y);
        }
    }

    ctx.strokeStyle = "#3abff8";
    ctx.lineWidth = 3;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "3abff8";
    ctx.stroke();
    ctx.shadowBlur = 0;
}


//function to draw the center line
function drawCenLin() {
    ctx.beginPath();
    ctx.moveTo(0, centery);
    ctx.lineTo(canvas.width, centery);
    ctx.strokeStyle = "#888";
    ctx.lineWidth = 2;
    ctx.stroke();
}