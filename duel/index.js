class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        //reduce target res by power
        target.res = target.res - this.power;
        console.log(target.name, "Resilience is now:", target.res);
    }
}
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.stat === "res"){
                target.res = target.res + this.magnitude;
                console.log(target.name, "Resilience is now:", target.res);
            }
            else{
                target.power = target.power + this.magnitude;
                console.log(target.name, "Power is now:", target.power);
            }
        } else {
            console.log( "Target must be a unit!" );
        }
    }
}

// const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
// console.log(unit1);
// const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
// console.log(unit2);
// const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
// console.log(effect1);
// const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
// console.log(effect2);
// const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
// console.log(effect3);

// TURN 1
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
effect1.play(unit1);

//TURN2
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
effect2.play(unit1);

//TURN 3
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
effect3.play(unit1);
unit1.attack(unit2);