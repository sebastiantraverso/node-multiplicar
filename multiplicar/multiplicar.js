const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./path');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}  *  ${i}  =  ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
        });

    });

}


let listarTabla = (base, limite) => {

    console.log('==============='.green);
    console.log(` Tabla del ${ base }`.green);
    console.log('==============='.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base}  *  ${i}  =  ${base * i} `);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}