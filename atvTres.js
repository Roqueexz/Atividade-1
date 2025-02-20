console.log("---------------------");
console.log(" Conversor de Temperatura");
console.log("---------------------");
var teclado = require("prompt-sync")();
var TemperaturaCelsius = parseInt(teclado("Digite o valor da Temperatura que ser\u00E1 convertida em Fahrenheit."));
var Fahrenheit = (TemperaturaCelsius) * (9 / 5) + 32;
console.log("O valor da temperatura informada em graus Celsius transformada em Fahrenheit \u00E9 ".concat(Fahrenheit));
