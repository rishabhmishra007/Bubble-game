function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 161; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}

let timer = 60;
function runtime() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.getElementById("timeval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over!!</h1>`;
        }
    }, 1000)
}

let newhit;
function getNewhit() {
    newhit = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = newhit;
}

let newscore = 0;
function increasescore() {
    let inc = newscore += 10;
    document.getElementById("scoreval").textContent = inc;
}

document.querySelector(".panel-bottom").addEventListener("click", function (dots) {
    if(Number(dots.target.textContent) === newhit){
        // console.log(Number(dots.target.textContent));
        increasescore();
        makebubble();
        getNewhit();
    }
    else{
        // alert("Wrong hit !!");
        timer = timer - 5;
    }
})

const textElement = document.querySelector(".cp");
const colors = ['red', 'blue', 'green', 'orange','black']; 

let currentIndex = 0;
setInterval(function() {
  textElement.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}, 1000);

makebubble();
runtime();
getNewhit();





