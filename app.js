const colors = require('colors/safe');

const argv = require('./configs/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// console.log(module);
// console.log(process.argv);