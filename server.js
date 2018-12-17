var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

hoxmArr = []
mardArr = []
gishatichArr = []
xotakerArr = []
grassArr = []



var Grass = require("./class.Grass.js")
var Xotaker = require("./class.Xotaker.js")
var Gishatich = require("./class.Gishatich.js")
var Mard = require("./class.Mard.js")
var Hoxm = require("./class.Hoxm.js")
matrix = [];


Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (var i = 0; i < 40; i++) {
    matrix.push([]);
    for (var h = 0; h < 40; h++) {
        matrix[i][h] = Math.floor(Math.random() * 2);
    }
}
for (var u = 0; u <= 15; u++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}
for (var o = 0; o <= 32; o++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}
for (var r = 0; r <= 10; r++) {
    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var q = 0; q <= 1; q++) {
    matrix[Math.round(Math.random() * 40)][Math.round(Math.random() * 40)] = 5;
}


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y));
        }
        else if (matrix[y][x] == 2) {
            var ser = 2 + (Math.round(Math.random())) / 2
            xotakerArr.push(new Xotaker(x, y, ser));
            matrix[y][x] += ser;
        }
        else if (matrix[y][x] == 3) {
            var ser = 3 + (Math.round(Math.random())) / 2
            gishatichArr.push(new Gishatich(x, y, ser));
            matrix[y][x] += ser;
        }
        else if (matrix[y][x] == 4) {
            var ser = 4 + (Math.round(Math.random())) / 2
            mardArr.push(new Mard(x, y, ser));
            matrix[y][x] += ser
        }
        else if (matrix[y][x] == 5) {
            hoxmArr.push(new Hoxm(x, y));
        }
    }
}


weather = "Amar"

function exanak() {
    if (weather == "Garun") {
        weather = "Amar"
    }
    else if (weather == "Amar") {
        weather = "Ashun"
    }
    else if (weather == "Ashun") {
        weather = "Dzmer"
    }
    else if (weather == "Dzmer") {
        weather = "Garun"
    }
    io.sockets.emit("weather", weather)

}

setInterval(exanak, 5000)




setInterval(drawServerayin, 200)


function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var l in xotakerArr) {
        xotakerArr[l].utel();
        xotakerArr[l].Bazmanal();
        xotakerArr[l].Mahanal()
    }
    for (var k in gishatichArr) {
        gishatichArr[k].utel();
        gishatichArr[k].Bazmanal();
        gishatichArr[k].Mahanal();
    }
    for (var f in mardArr) {
        mardArr[f].utel();
        mardArr[f].Bazmanal();
        mardArr[f].Mahanal();
    }
    for (var g in hoxmArr) {
        hoxmArr[g].haytnvel();
    }



    io.sockets.emit("Ekan brni", matrix)
}
