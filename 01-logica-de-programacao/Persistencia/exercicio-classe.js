class Funcionario {


    constructor (nome, cargo,salario,departamento) {
            this.nome = nome
            this.cargo = cargo
            this.salario = salario
            this.departamento = departamento
    }

    promover(novoCargo) {
        this.cargo = novoCargo;
    }

    aumentarSalario(valor){
         this.salario = this.salario + valor;
    }
    apresentar() {
        console.log("Nome: " + this.nome);
        console.log("Cargo: " + this.cargo);
        console.log("Salario: R$" + this.salario);
        console.log("Departamento: " + this.departamento);
    }
}
let func1 = new Funcionario("Alailson", "Estagiario", 1500, "TI");

func1.apresentar()

func1.promover("Desenvolvedor");

func1.aumentarSalario(500);