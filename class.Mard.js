var LivingCreature = require("./class.LivingCreature")

module.exports = class Mard extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
    }


    yntrelVandak(ch, ch1, ch2) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == ch2) {
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
        var norVandak = this.yntrelVandak(3, 2, 1);
        var yntrelVandak = Random(norVandak)
        if (yntrelVandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.y = yntrelVandak[1];
            this.x = yntrelVandak[0];
            matrix[this.y][this.x] = 4

            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }


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
            matrix[this.y][this.x] = 4;



        }


    }

    Bazmanal() {
        this.stanalNorKordinatner();
        var norVandak = Random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy >= 30) {
                var norMard = new Mard(norVandak[0], norVandak[1]);
                mardArr.push(norMard);
                matrix[norVandak[1]][norVandak[0]] = 4;
                this.energy = 6;
            }
        }

    }



    Mahanal() {
        if (this.energy == 7) {
            matrix[this.y][this.x] = 0;
            for (var i in mardArr) {
                if (this.y == mardArr[i].y && this.x == mardArr[i].x) {
                    mardArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
