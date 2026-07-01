// let Cria uma variável 
let saldo = 500;
let saque = 300;

// try Tentar executar o código
// throw Lançar um erro
try {
    if (saque > saldo) {
        throw new Error("saldo insuficiente");  // Cria um erro com a mensagem "saldo insuficiente" e lança para o catch
    }
    
    console.log("saque realizado");  // Só mostra se não der erro
    
// catch Pegar o erro
} catch (error) {  // ← pode chamar de "error" ou "erro"
    console.log(error.message);  //  exibe a mensagem no console
}