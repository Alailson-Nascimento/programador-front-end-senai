import {readFile} from "node:fs/promises";

const conteudo = await readFile("./produto.json", "utf-8");

let produtos = JSON.parse(conteudo);

let produto = produtos.find (p => p.id === 2);


produtos.push({
    id: 3,
    nome: "Teclado",
    preco: 180
});
console.log(produtos);


const json = JSON.stringify(produtos,null, 4);
await writeFile("./produto.json", json)