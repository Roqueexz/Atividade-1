console.log("---------------------");
console.log(" Conversor de Temperatura");
console.log("---------------------");
var teclado = require("prompt-sync")();
var Fahrenheit = parseInt(teclado("Digite o valor da Temperatura que ser\u00E1 convertida em graus Celsius."));
var TemperaturaCelsius = (Fahrenheit - 32) * 5 / 9;
console.log("O valor da temperatura informada em graus Fahrenheit transformada em Celsius \u00E9 ".concat(TemperaturaCelsius));
