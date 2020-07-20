let name = "Deadpool";
let realName = "Wade Wilson";

let completeName = name + ' is ' + realName;
let completeNameTemplate = `${name} is ${realName}`;

console.log(completeName);
console.log(completeNameTemplate);

console.log(completeName === completeNameTemplate);

function getName(){
    return `${name} is ${realName}`;
}

console.log(`${getName()}`);