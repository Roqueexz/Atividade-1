let teclado = require(`prompt-sync`) ();

console.log(`---------------------`);
console.log(` Calculo Média`);
console.log(`---------------------`);

let nome: string = teclado(`Digite o nome do aluno:`);
let notaBimestralUm: number = parseInt(teclado(`Digite a nota N1:`));
let notaBimestralDois: number = parseInt(teclado(`Digite a nota N2`));
let notaBimestralTres: number = parseInt(teclado(`Digite a nota N3:`));
let notaBimestralQuatro: number = parseInt(teclado(`Digite a nota N4`));
let nnotaBimestralCinco: number = parseInt(teclado(`Digite a nota N5:`));
let notaBimestralSeis: number = parseInt(teclado(`Digite a nota N6`));
let notaBimestralSete: number = parseInt(teclado(`Digite a nota N7:`));
let notaBimestralOito: number = parseInt(teclado(`Digite a nota N8:`));
let notaBimestralNove: number = parseInt(teclado(`Digite a nota N9`));
let notaBimestralDez: number = parseInt(teclado(`Digite a nota N10`));


let media: number = (notaBimestralUm+notaBimestralDois+notaBimestralTres+notaBimestralQuatro+nnotaBimestralCinco+notaBimestralSeis+notaBimestralSete+notaBimestralOito+notaBimestralDez+notaBimestralDez) /10;

console.log(`O nome do aluno é ${nome} e sua média corresponde á ${media}`);
