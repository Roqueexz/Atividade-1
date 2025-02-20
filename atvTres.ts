console.log(`---------------------`);
console.log(` Conversor de Temperatura`);
console.log(`---------------------`);

let teclado = require(`prompt-sync`) ();
let TemperaturaCelsius:number = parseInt(teclado(`Digite o valor da Temperatura que será convertida em Fahrenheit.`)); 

let Fahrenheit: number = (TemperaturaCelsius) * (9/5) + 32; 

console.log(`O valor da temperatura informada em graus Celsius transformada em Fahrenheit é ${Fahrenheit}`); 

