function addition(a,b){
    return a+b;
}

let add = (a,b) => {return a+b};

let greeting = (name) => {
    return `Hello ${name}`;
};

let deadpool = {
    name: "Wade",
    lastName: "Wilson",
    power: "Regeneration",
    getInfo(){
        return `${this.name} ${this.lastName} has ${this.power}`
    }
};

console.log(deadpool.getInfo());