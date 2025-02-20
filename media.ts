let teclado = require(`prompt-sync`) ();

console.log(`---------------------`);
console.log(` Calculo Média`);
console.log(`---------------------`);

let nome: string = teclado(`Digite o nome do aluno:`);
let n1: number = parseInt(teclado(`Digite a nota N1:`));
let n2: number = parseInt(teclado(`Digite a nota N2`));

let media: number = (n1+n2) /2;

console.log(`O nome do aluno é ${nome} e a media é ${media}`);
