var circles = document.getElementsByClassName("circle");
var text = document.getElementById("text");
var startAgain = document.getElementById("start");

//random color array of 4
var randomColors = colorGenerator(4);

//calls the function color for each circle
function colorGenerator(number) {  
    
    var colorArray = [];
    for(var i =0; i<number; i++) {
        colorArray.push(color());
    }
    return colorArray;
}

//creates random colors for a circle
function color() {    
    
     var red = Math.floor(Math.random() * 256);
     var green = Math.floor(Math.random() * 256);
     var blue = Math.floor(Math.random() * 256);  
     return "rgb"+"(" + red + ", " + green + ", " + blue + ")";
}

var rightColor = rightColorGenerator();
// to choose a random color from the color array 
function rightColorGenerator() {
    
    //creating a number between 0 and 3
    var number = Math.floor(Math.random() * randomColors.length );
    return randomColors[number];
}
document.getElementById("rgb").innerHTML = rightColor;

//renew the game
startAgain.addEventListener("click", function() {
    //new colors and new chosen color
    randomColors = colorGenerator(4);
    rightColor = rightColorGenerator();
    document.getElementById("rgb").innerHTML = rightColor;
    document.querySelector("h1").style.backgroundColor = "RosyBrown";
    
    //color the circles
    for(var i = 0; i< circles.length; i++) {
        circles[i].style.backgroundColor = randomColors[i];
    }
    
});

    
for(var i = 0; i< circles.length; i++) {
    //color the cirles with iterating through randomColors array
    circles[i].style.backgroundColor = randomColors[i];
    circles[i].addEventListener("click", function(){
    
        var chosenColor = this.style.backgroundColor;
        
        if(chosenColor === rightColor) {
            
            text.textContent = "WOHO!";
            //change circles' color to the right color
            changeColor(chosenColor);
            //change h1 to right color
            document.querySelector("h1").style.backgroundColor = chosenColor;
        
        } else {
  
            //make the circle "dissapear" with changing the background to black
            this.style.backgroundColor = "black";
            text.textContent = "Try Again!";
        }
    });
}
//iterate through circles to change their color to the given color
function changeColor(color) {
    
    for(var i = 0; i< circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}
