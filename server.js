var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//fs.unlinkSync("Statistics.json")


hoxmArr = []
mardArr = []
gishatichArr = []
xotakerArr = []
grassArr = []

xotyClec = 0
xotakerCnvec = 0
gishatichCnvec = 0
mardyKerav = 0
hoxmyVeracrec = 0
mardyQaylec = 0

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
for (var u = 0; u <= 40; u++) {
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




setInterval(drawServerayin, 300)


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
    //var text = {"Cnvac xotakerneri qanaky":xotakerCnvec,"Cnvac gishatichneri qanaky": gishatichCnvec + "\nMardkanc kerac baneri qanaky" + "-" + mardyKerav + "\nHoxmi veracrac baneri qanaky" + "-" + hoxmyVeracrec + "\nMardaknc qayleri qanaky datark vandaknerov" + "-" + mardyQaylec + "\nClac xoteri qanaky" + "-" + xotyClec





    io.sockets.emit("Ekan brni", matrix)

}
io.on('connection', function (socket) {
    socket.on("Sxmvec", function (arr) {
        var x = arr[0];
        var y = arr[1];
        

        var directions = [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],
            [x - 1, y],
            [x + 1, y],
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1],
        ];

        if (matrix[y][x] == 1) {
            for (var i in grassArr) {
                if (y == grassArr[i].y && x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[y][x] == 2) {
            for (var i in xotakerArr) {
                if (y == xotakerArr[i].y && x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[y][x] == 2.5) {
            for (var i in xotakerArr) {
                if (y == xotakerArr[i].y && x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[y][x] == 3) {
            for (var i in gishatichArr) {
                if (y == gishatichArr[i].y && x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (matrix[y][x] == 3.5) {
            for (var i in gishatichArr) {
                if (y == gishatichArr[i].y && x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (matrix[y][x] == 4) {
            for (var i in mardArr) {
                if (y == mardArr[i].y && x == mardArr[i].x) {
                    mardArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (matrix[y][x] == 4.5) {
            for (var i in mardArr) {
                if (y == mardArr[i].y && x == mardArr[i].x) {
                    mardArr.splice(i, 1);
                    break;
                }

            }

        }
        matrix[y][x] = 0

        for (var i in directions) {
            var harevanx = directions[i][0];
            var harevany = directions[i][1];

            if (matrix[harevany][harevanx] == 1) {
                for (var i in grassArr) {
                    if (harevany == grassArr[i].y && harevanx == grassArr[i].x) {
                        grassArr.splice(i, 1);
                        break;
                    }

                }
            }
            else if (matrix[harevany][harevanx] == 2) {
                for (var i in xotakerArr) {
                    if (harevany == xotakerArr[i].y && harevanx == xotakerArr[i].x) {
                        xotakerArr.splice(i, 1);
                        break;
                    }

                }
            }
            else if (matrix[harevany][harevanx] == 2.5) {
                for (var i in xotakerArr) {
                    if (harevany == xotakerArr[i].y && harevanx == xotakerArr[i].x) {
                        xotakerArr.splice(i, 1);
                        break;
                    }

                }
            }
            else if (matrix[harevany][harevanx] == 3) {
                for (var i in gishatichArr) {
                    if (harevany == gishatichArr[i].y && harevanx == gishatichArr[i].x) {
                        gishatichArr.splice(i, 1);
                        break;
                    }

                }

            }
            else if (matrix[harevany][harevanx] == 3.5) {
                for (var i in gishatichArr) {
                    if (harevany == gishatichArr[i].y && harevanx == gishatichArr[i].x) {
                        gishatichArr.splice(i, 1);
                        break;
                    }

                }

            }
            else if (matrix[harevany][harevanx] == 4) {
                for (var i in mardArr) {
                    if (harevany == mardArr[i].y && harevanx == mardArr[i].x) {
                        mardArr.splice(i, 1);
                        break;
                    }

                }

            }
            else if (matrix[harevany][harevanx] == 4.5) {
                for (var i in mardArr) {
                    if (harevany == mardArr[i].y && harevanx == mardArr[i].x) {
                        mardArr.splice(i, 1);
                        break;
                    }

                }

            }
            matrix[harevany][harevanx] = 0
        }
    })
});


var obj = { "info": [] };
function main() {
    var file = "Statistics.json"
    obj.info.push({ "Cnvac xotakerneri qanaky": xotakerCnvec, "Cnvac gishatichneri qanaky": gishatichCnvec, "Mardkanc kerac baneri qanaky": mardyKerav, "Hoxmi veracrac baneri qanaky": hoxmyVeracrec, "Mardaknc qayleri qanaky datark vandaknerov": mardyQaylec, "Clac xoteri qanaky": xotyClec });
    fs.writeFileSync(file, JSON.stringify(obj,null,3));


}
setInterval(main, 3000)

