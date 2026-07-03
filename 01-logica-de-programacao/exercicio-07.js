import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

const nome = await rl.question("Digite seu nome: ");

 const nota1 = parseFloat(await rl.question("Digite a nota1: "));
    const nota2 = parseFloat(await rl.question("Digite a nota2: "));
    const nota3 = parseFloat(await rl.question("Digite a nota3: "));


let media = ((nota1 + nota2 + nota3) / 3);


let maiorNota = Math.max(nota1, nota2, nota3);
let menorNota = Math.min(nota1, nota2, nota3);

try {
    if (nota1 < 0 || nota1 > 10) {
        throw new Error("Nota 1 é inválida!")
    } 
    if (nota2 < 0 || nota2 > 10) {
        throw new Error("Nota 1 é inválida!")
    }
    if (nota3 < 0 || nota3 > 10) {
        throw new Error("Nota 1 é inválida!")
    }

    console.log(`Nome: ${nome}`)
    console.log(`A maior nota foi: ${maiorNota}`)
    console.log(`A menor nota foi: ${menorNota}`)
    console.log(` media foi: ${media.toFixed(2)}`)
}
catch (erro) {
    console.log("erro:", erro.message)
}
rl.close();
