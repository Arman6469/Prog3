var LivingCreature = require("./class.LivingCreature.js")

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y)
        this.energy = 5;
        if (ser == 3) {
            this.ser = "arakan"
        }
        else {
            this.ser = "igakan"
        }
    }

    yntrelVandak1(ch, ch1) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak1(2, 2.5);
        var yntrelVandak = Random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 3 : 3.5;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.Move();
        }

    }



    Move() {
        if (weather != "Dzmer") {
            this.stanalNorKordinatner();
            var norVandak = this.yntrelVandak1(1, 0);
            var yntrelVandak = Random(norVandak)
            if (yntrelVandak) {
                this.energy--;
                matrix[this.y][this.x] = 0;
                this.y = yntrelVandak[1];
                this.x = yntrelVandak[0];
                matrix[this.y][this.x] = this.ser == "arakan" ? 3 : 3.5; 
            }
        }
    }

    Bazmanal() {
        if (weather != "Dzmer") {
            if (this.ser == "arakan") {
                var vandak = Random(this.yntrelVandak(3.5));
                if (vandak) {
                    var norVandak = Random(this.yntrelVandak(0));
                    if (norVandak) {
                        if (this.energy >= 10) {
                            var ser = 3 + (Math.round(Math.random())) / 2
                            var norGishatich = new Gishatich(norVandak[0], norVandak[1], ser);
                            gishatichArr.push(norGishatich);
                            matrix[norVandak[1]][norVandak[0]] = 3 + (Math.round(Math.random())) / 2
                            this.energy = 6;
                            gishatichCnvec++
                        }
                    }
                }
            }
        }
    }

    Mahanal() {
        if (this.energy == -30) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}