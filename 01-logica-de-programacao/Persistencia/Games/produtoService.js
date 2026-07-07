import {readFile,writeFile} from "node:fs/promises";

//função que lista jogos e ler o arquivo json
async function listarJogos() {

const conteudo = await readFile("./Persistencia/Games/jogos.json", "utf-8");

let jogos = JSON.parse(conteudo);

return jogos;
}

//função que buca jogos pelo identificador
async function buscarJogo(id) {
    const conteudo = await readFile("./Persistencia/Games/jogos.json", "utf-8");
    let jogos = JSON.parse(conteudo);
    let jogo = jogo.find(i => i.id === id);

    if (jogo === undefined) {
        return "Jogo não encontrado"
    }
    return jogo;
}
//Funão que adiciona no vo produto
async function cadrastrarJogo(jogo){
    if (jogo.preco < 0) {
        throw new Error ("valor do jogo não pode ser negativo")
    }

    if (jogo.estoque < 0) {
        throw new Error ("Estoque do jogo não pode ser negativo")
    }

     const conteudo = await readFile("./Persistencia/Games/jogos.json", "utf-8");

     let jogos = JSON.parse(conteudo);
// find procura um item na lista e compara com o identificador
     let JogoExistente = jogos.find(j => j.id === jogo.id);

     if(JogoExistente !== undefined) {
        throw new Error("Jogo ja existe");
     }
     // push adiciona um item no final da lista
     jogos.push(jogo);
     // Precisa transformar em texto para salvar no arquivo
    //  O 4 é quantos espaços de indentação (organização)
     const json = JSON.stringify(jogos, null, 4); 
        await writeFile("./Persistencia/Games/jogos.json", json);

        return "Jogo foi cadrastado"
}

async function tratarErros () {
    try {
        let listaJogosCompleta = await listarJogos();
        console.log(listaJogosCompleta);
   
        console.log("\n=== BUSCAR JOGO ID 1 ===");
        let jogo1 = await buscarJogo(1);
        console.log(jogo1);
        
        console.log("\n=== BUSCAR JOGO ID 99 ===");
        let jogo99 = await buscarJogo(99);
        console.log(jogo99);
        
        let resultado = await cadrastrarJogo({
            id: 3,
            nome: "Spider-Man",
            preco: 180,
            estoque: 25
        });
        console.log(resultado);
    
        try {
            await cadrastrarJogo({
              id: 4,
              nome: "FIFA",
              preco: -50,
              estoque: 10
            });
        } catch (erro) {
            console.log("Erro:", erro.message);
        }
        try {
            await cadrastrarJogo({
                id: 1,
                nome: "Minecraft",
                 preco: 100,
                estoque: 30
            });
        } catch (erro) {
            console.log("Erro:", erro.message);
        }
        
        let depois = await listarJogos();
        console.log(depois);
        
    } catch (erro) {
        console.log("Erro geral:", erro.message);
    }

}
tratarErros();
