// requireds
const fs = require('fs');

let listar = (base, limite) => {
    console.log('==================================='.green)
    console.log(`===========tabla de ${base}==============`.green)
    console.log('==================================='.green)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`.green);;
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/table-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}