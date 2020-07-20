const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').command("create", "Prints the base's multiply table", options).help().argv;

module.exports = {
    argv
}