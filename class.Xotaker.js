var LivingCreature = require("./class.LivingCreature.js")

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 8;
        if (ser == 2) {
            this.ser = "arakan"
        }
        else {
            this.ser = "igakan"
        }
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
        var norVandak = this.yntrelVandak(1);
        var yntrelVandak = Random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 2 : 2.5;
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
        }
        else {
            this.Move();
        }

    }



    Move() {
        this.stanalNorKordinatner();
        var norVandak = this.yntrelVandak(0);
        var yntrelVandak = Random(norVandak)
        if (yntrelVandak) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = this.ser == "arakan" ? 2 : 2.5;
        }
    }

    Bazmanal() {
        this.stanalNorKordinatner();
        if (this.ser == "arakan") {
            var vandak = Random(this.yntrelVandak(2.5));
            if (vandak) {
                var norVandak = Random(this.yntrelVandak(0));
                if (norVandak) {
                    if (this.energy >= 10) {
                        var ser = 2 + (Math.round(Math.random())) / 2
                        var norXotaker = new Xotaker(norVandak[0], norVandak[1], ser);
                        xotakerArr.push(norXotaker);
                        matrix[norVandak[1]][norVandak[0]] = 2 + (Math.round(Math.random())) / 2
                        this.energy = 6;
                        xotakerCnvec++
                    }
                }
            }
        }
    }



    Mahanal() {
        if (weather == "Dzmer" && this.energy == 2) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }

        else if (weather != "Dzmer" && this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
