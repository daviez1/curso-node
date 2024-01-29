const argv = require('yargs')
                        .option('b',{
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                        })
                        .option('x',{
                        alias:'x',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Es la cantidad de veces a multiplicar'
                        })
                        .check( (argv,options) => {
                        if( isNaN( argv.b )) {
                            throw 'La base tiene que ser un numero'
                        }
                        return true
                        })
                        .check( (argv,options) => {
                        if( isNaN( argv.x ) || argv.x == undefined) {
                            throw 'La cantidad de veces a multiplicar tiene que ser un numero'
                        }
                        return true
                        })
                        .argv;


                    module.exports = argv