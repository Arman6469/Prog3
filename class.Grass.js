var LivingCreature = require("./class.LivingCreature.js")

module.exports = class Grass extends LivingCreature {

    bazmanal() {
        this.multiply++;
        var norVandak = Random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 1;
            xotyClec++
        }
    }
    


}