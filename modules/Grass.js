var LivingCreature = require("./LivingCreature");
var random = require("./random");
module.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if(weateris == "Summer" || weateris == "Spring" || weateris == "Autumn" ){
            if (this.multiply >= 7 && newCell) {
                grassHashiv++;
                grassSkizbHashiv++;
                var newGrass = new Grass(newCell[0], newCell[1], this.index);
                grassArr.push(newGrass);
                matrix[newCell[1]][newCell[0]] = 1;
                this.multiply = 0;
            }
        }
        else if(weateris == "Winter"){
            if (this.multiply >= 9 && newCell) {
                grassHashiv++;
                grassSkizbHashiv++;
                var newGrass = new Grass(newCell[0], newCell[1], this.index);
                grassArr.push(newGrass);
                matrix[newCell[1]][newCell[0]] = 1;
                this.multiply = 0;
            }
        }
    }
}