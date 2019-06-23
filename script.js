function setup() {

    var socket = io();
    var side = 30;
    var matrix = [];

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let WolfCountElement = document.getElementById('WolfCount');
    let PeopleCountElement = document.getElementById('PeopleCount');
    let TractorCountElement = document.getElementById('TractorCount');
    let grassSkizbCountElement = document.getElementById('grassSkizb');
    let grassEaterSkizbCountElement = document.getElementById('grassEaterSkizb');
    let WolfSkizbCountElement = document.getElementById('WolfSkizb');
    let PeopleSkizbCountElement = document.getElementById('PeopleSkizb');
    let TractorSkizbCountElement = document.getElementById('TractorSkizb');
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        matrix = data.matrix;
        season = data.weather;
        var weatherP = document.getElementById("weather");
        weatherP.innerHTML = season;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        WolfCountElement.innerText = data.WolfCounter;
        PeopleCountElement.innerText = data.PeopleCounter;
        TractorCountElement.innerText = data.TractorCounter;
        grassSkizbCountElement.innerText = data.grassSkizbCounter;
        grassEaterSkizbCountElement.innerText = data.grassEaterSkizbCounter;
        WolfSkizbCountElement.innerText = data.WolfSkizbCounter;
        PeopleSkizbCountElement.innerText = data.PeopleSkizbCounter;
        TractorSkizbCountElement.innerText = data.TractorSkizbCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)
        
        background('#595959');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "Winter"){
                        fill("#e6ffff");
                    }
                    else if (data.weather == "Spring"){
                        fill("green");
                    }
                    else if (data.weather == "Summer"){
                        fill("#009933");
                    }
                    else if(data.weather == "Autumn"){
                        fill("#cccc00");
                    }
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 3) {
                    if (data.weather == "Spring"){
                        fill("red");
                    }
                    else {
                        fill("#5c5c3d");
                    }
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 4) {
                    if(data.weather == "Winter"){
                        fill("blue");
                    }
                    else{
                        fill("#cc9966");
                    }
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 5) {
                    fill('orange');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#663300');
                    rect(j * side, i * side, side, side);
                }
            }
        }
        if(data.weather == "Winter"){
            document.body.style.backgroundColor = "#00c6fb";
        }
        else if (data.weather == "Spring"){
            document.body.style.backgroundColor = "#4eee24";
        }
        else if (data.weather == "Summer"){
            document.body.style.backgroundColor = "#df1a1a";
        }
        else if(data.weather == "Autumn"){
            document.body.style.backgroundColor = "#ff9900";
        }
    }
document.getElementById('Spanel').addEventListener("click" , spanel);
    function spanel(){       
        socket.emit("spanel" , "spanell");
    }
}