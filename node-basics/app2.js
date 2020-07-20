const {multiply} = require('./multiply');
const {argv} = require('./config/args');
const colors = require('colors');

let command = argv._[0];

switch(command){
    case 'create':
        multiply(argv.base, argv.limit)
        .then((msg) => console.log(msg.green))
        .catch((err) => console.log(err.red));
    break;

    default:
        console.log("Unrecognized command".red);
    break
}