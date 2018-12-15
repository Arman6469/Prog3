var socket = io();
var side = 16;
var weather = "Amar";

function setup() {
    noStroke();
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}
socket.on("weather", function(data){
    weather = data;
});

socket.on("Ekan brni", function (matrix) {
    background("acacac")
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && weather != "Dzmer") {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && weather == "Dzmer") {
                fill(141, 255, 32);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(209, 6, 6);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(231, 151, 91);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    fill("black");
    text("Now is " + weather, 0, matrix[0].length * side + 10);
   
    

});








