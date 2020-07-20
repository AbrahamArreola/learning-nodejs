let deadpool = {
    name: "Wade",
    lastName: "Wilson",
    power: "Regeneration",
    getInfo: function(){
        return `${this.name} ${this.lastName} has ${this.power}`
    }
};

console.log(deadpool.getInfo());

let {name: newName, lastName, power} = deadpool;

console.log(newName, lastName, power);