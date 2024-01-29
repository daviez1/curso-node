const fs = require('fs');

let multiplicar = async(base, x) =>{
    let resultado = '';
    for (let i = 0; i <= x; i++) {
        resultado += `${base} x ${i} = ${base * i}\n`;    
    }
    console.log(resultado);
    fs.writeFileSync(`./tablas/tabla-base_${base}.txt`, resultado, err =>{
        if(err) throw err;
    })
} 
    
module.exports = multiplicar;