const yargs = require('yargs')
const argv = require('./Config/yargs')
require('colors')
const multiplicar = require("./tablas")

console.log(argv)
// console.log(process.argv)

// const base = 2

try {
    multiplicar( argv.b, argv.x )
} catch (error) {
    throw error
}