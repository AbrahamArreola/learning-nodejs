
//Requires
const fs = require('fs');               //to import native node modules
//const express = require('express');   //to import downloadable node modules
//const module = require('./module');   //to import our modules

let base = 4;
let data = "";

for (let index = 1; index <= 10; index++) {
    data += `${base} * ${index} = ${base * index}\n`;
}

fs.writeFile('table.txt', data, err => {
    if (err) throw err;

    console.log("The file has been created");
});
