var randomColors = colorGenerator(4);
var circles = document.getElementsByClassName("circle");
var rightColor = numberGenerator();
var text = document.getElementById("text");
var startAgain = document.getElementById("start");

document.getElementById("rgb").innerHTML = rightColor;

startAgain.addEventListener("click", function() {
    randomColors = colorGenerator(4);
    rightColor = numberGenerator();
    document.getElementById("rgb").innerHTML = rightColor;
    document.querySelector("h1").style.backgroundColor = "RosyBrown";
    
    for(var i = 0; i< circles.length; i++) {
    circles[i].style.backgroundColor = randomColors[i];
}
    
});

    
for(var i = 0; i< circles.length; i++) {
    
    circles[i].style.backgroundColor = randomColors[i];
    circles[i].addEventListener("click", function(){
        
    var chosenColor = this.style.backgroundColor;
        
    if(chosenColor === rightColor) {
        text.textContent = "WOHO!";
        changeColor(chosenColor);
        document.querySelector("h1").style.backgroundColor = chosenColor;
    } else {
        this.style.backgroundColor = "black";
        text.textContent = "Try Again!";
    }
       
    });
}


function changeColor(color) {
    for(var i = 0; i< circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

// to choose a random color from the color array every single game
function numberGenerator() {
    //creating a number between 0 and 3
    var number = Math.floor(Math.random() * randomColors.length );
    return randomColors[number];
}

function colorGenerator(number) {
    
    var colorArray = [];
    for(var i =0; i<number; i++) {
        colorArray.push(color());
    }
    return colorArray;
}

function color() {
     var red = Math.floor(Math.random() * 256);
     var green = Math.floor(Math.random() * 256);
     var blue = Math.floor(Math.random() * 256);
     
     return "rgb"+"(" + red + ", " + green + ", " + blue + ")";
}
