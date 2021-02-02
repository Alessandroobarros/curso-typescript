// string
let nome: string = 'Alessandro'
console.log(nome)
// nome = 28 

// numbers 
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade 27'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

//tuplas (podem ser de varios tipos definidos)
let endereco: [string, number, string] = ["avenida principal", 99, ""]
console.log(endereco)

endereco = ["rua importantae", 1260, "bloco A"]
console.log(endereco)

//enums  (valores pré-definidos)
enum cor {
    Cinza, //0
    Verde = 100,//1
    Azul = 10,//2,
    laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: cor = cor.Verde
console.log(minhaCor)

console.log(cor.Azul)
console.log(cor.laranja, cor.Amarelo)
console.log(cor.Verde, cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

//funções
function retornaMeuNome(): string {
    //return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'bia'))
console.log(multiplicar(4.7, 9))

//tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo  ()
// calculo = {}

calculo = multiplicar
console.log(calculo(5, 6))

//objetos
let usuario: { nome: string, idade: number } = {
    nome: 'Ale',
    idade: 28
}

console.log(usuario)
// usuario = {}

// usuario = {
//     name: 'Maria'
//     age: 31
// }

usuario = {
    idade: 27,
    nome: 'Kendiel'
}
console.log(usuario)

//DESAFIO 
/* criar um objeto funcionario com:
    -Array de strings com os nomes dos supervisores
    -Função de bater ponto que receba a hora (numero) e retorna uma string
        -> Ponto normal (<=8)
        -> Fora do horario (>8)
*/

type Funcionario = {
    supervisores: string[],
    baterponto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterponto(horario: number): string {
        if (horario <= 8) {
            return "Ponto normal"
        } else {
            return "Fora do horário"
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Alessandro'],
    baterponto(horario: number): string {
        if (horario <= 8) {
            return "Ponto normal"
        } else {
            return "Fora do horário"
        }
    }
}


console.log(funcionario.supervisores)
console.log(funcionario.baterponto(8))
console.log(funcionario.baterponto(18))


//Union Types
let nota: number | string = 10
console.log(`minha nota é ${nota}`)
nota = "10"
console.log(`minha nota é ${nota}`)


// checando tipos
let valor = false

if (typeof valor === "number") {
    console.log("é um number !")
} else {
    console.log(typeof valor)
}

// Tipo Never 
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabao',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome ! ")
        }
        if (this.preco <= 0) {
            falha('Preco invalido !')
        }
    }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: number | null = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tell: string,
    tell2: string | null
}

const contato1: Contato = {
    nome: "fulano",
    tell: "9876-4238",
    tell2: null
}

console.log(contato1.nome)
console.log(contato1.tell)
console.log(contato1.tell2)


let podeSerNulo = null //type any !!!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = "abc"
console.log(podeSerNulo)


//Desafio tipos

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
    sacar: (saque:number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    },
    sacar(saque: number) {
        this.saldo -= saque
    }
}

type Correntista ={
    nome: string,
    contaBancaria: ContaBancaria, 
    contatos: string[]
}


let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
correntista.contaBancaria.sacar(456)
console.log(correntista)

