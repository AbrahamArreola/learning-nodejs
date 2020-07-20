const fs = require('fs');

let multiply = (base, limit) => {

    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limit)){
            reject("Base is not a number");
            return;
        }

        if(limit <= 1){
            reject("Limit must be greater than 1");
            return;
        }
    
        let data = "";
    
        for (let index = 1; index <= limit; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
    
        return fs.writeFile('table.txt', data, err => {
            if (err){
                reject(err);
            }
            else{
                resolve("File created!");
            }
        });
    });
};

module.exports = {
    multiply
}