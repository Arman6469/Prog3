module.exports = class Hoxm {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
    }

    haytnvel() {
        matrix[this.y][this.x] = 0;

        this.x = Math.floor(Math.random() * matrix.length);
        this.y = Math.floor(Math.random() * matrix[1].length);

        if (matrix[this.y][this.x] == 1) {
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[this.y][this.x] == 2) {
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[this.y][this.x] == 2.5) {
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }

            }
        }
        else if (matrix[this.y][this.x] == 3) {
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (matrix[this.y][this.x] == 3.5) {
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (matrix[this.y][this.x] == 4) {
            for (var i in mardArr) {
                if (this.y == mardArr[i].y && this.x == mardArr[i].x) {
                    mardArr.splice(i, 1);
                    break;
                }

            }

        }
        else if (matrix[this.y][this.x] == 4.5) {
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }

            }

        }
        matrix[this.y][this.x] = 5;


    }
}