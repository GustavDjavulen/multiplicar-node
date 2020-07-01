/*jshint esversion: 8 */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        console.log('====================='.green);
        console.log(`Tabla del ${base}`.green);
        console.log('====================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}`.magenta);
        }
        resolve();

    });
};

let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(data);
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
             reject(err);
            else
             resolve(`tabla-${base}-al-${limite}.txt`);
            console.log('El Archivo tabla.txt ha sido creado'.cyan);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};