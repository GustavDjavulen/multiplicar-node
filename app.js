/*jshint esversion: 8 */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { argv } = require('./config/yargs.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(err => {console.log(err);});
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => {console.log(resp);})
            .catch(err => {console.log(err);});
        break;

    default:
        console.log('comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];

