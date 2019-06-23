var LivingCreature = require("./LivingCreature");
var random = require("./random");
module.exports = class Tractor extends LivingCreature {
    constructor(x, y, index, value) {
        super(x,y,index);
        this.value = value;
        this.energy = 12;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x-2,this.y-2],
            [this.x-1,this.y-2],
            [this.x  ,this.y-2],
            [this.x+1,this.y-2],
            [this.x+2,this.y-2],
            
            [this.x-2,this.y-1],
            [this.x-1,this.y-1],
            [this.x  ,this.y-1],
            [this.x+1,this.y-1],
            [this.x+2,this.y-1],
            
            [this.x-2,this.y  ],
            [this.x-1,this.y  ],
            [this.x+1,this.y  ],
            [this.x+2,this.y  ],
        
            [this.x-2,this.y+1],
            [this.x-1,this.y+1],
            [this.x  ,this.y+1],
            [this.x+1,this.y+1],
            [this.x+2,this.y+1],
            
            [this.x-2,this.y+2],
            [this.x-1,this.y+2],
            [this.x  ,this.y+2],
            [this.x+1,this.y+2],
            [this.x+2,this.y+2],
            ];        
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        var newCells1 = this.chooseCell(0);
        var newCells2 = this.chooseCell(1);
        var newCell1 = newCells1.concat(newCells2);
        var newCell3 = this.chooseCell(6);
        var newCells = newCell3.concat(newCell1) ;
        var newCell = random(newCells);
        if (newCell) {   
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 6;
            if(matrix[newY][newX]==1){
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        grassHashiv--;
                        break;
                    }
                }
            }
            matrix[newY][newX] = 5;
            this.y = newY;
            this.x = newX;
            this.energy-=2;
        }
    }
    eat() {
        var newCell = random( this.chooseCell(4));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 6;
            if(matrix[newY][newX] == 5){
                for (var i in PeopleArr) {
                    
                    if (newX == PeopleArr[i].x && newY == PeopleArr[i].y) {
                        PeopleArr.splice(i, 1);
                        break;
                    }
                }
                PeopleHashiv--;
                this.energy += 4;
            }
            matrix[newY][newX] = this.index;
            
            this.y = newY;
            this.x = newX;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 16 && newCell && this.value==0) {
            var newTractor = new Tractor(newCell[0], newCell[1], this.index,Math.round(Math.random()));
            TractorHashiv++;
            TractorSkizbHashiv++;
            TractorArr.push(newTractor);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 12;
        }
    }
    die(){
        if (this.energy<=0){
            matrix[this.y][this.x] = 0;
            for (var i in  TractorArr) {
                if (this.x ==  TractorArr[i].x && this.y ==  TractorArr[i].y) {
                    TractorArr.splice(i, 1);
                    break;
                }
            }
            TractorHashiv--;
        }
    }
}