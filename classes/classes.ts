class Data {
    /* Publico por padrao */
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversaro = new Data(3)
aniversaro.dia = 4
console.log(aniversaro.dia)
console.log(aniversaro)

const casamento = new Data /* posso omitir os "()" */
casamento.ano = 2017
console.log(casamento)


class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversaroEsperto = new DataEsperta(3)
aniversaroEsperto.dia = 4
console.log(aniversaroEsperto.dia)
console.log(aniversaroEsperto)

const casamentoEsperto = new DataEsperta /* posso omitir os "()" */
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)


/* Desafio Classe do Produto*/

/* Atributos: nome, preco e desconto
Criar o construtor
obs1: Desconto é opcional (valor padrao 0)
obs2: Criar dois produtos: passando dois e tres parametros
*/

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0){
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    public precoComDesconto(): number{
        // return this.preco - (this.preco * this.desconto)
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.preco} (${this.desconto *100}% off) preço com desconto ${this.precoComDesconto()}`
    }
}

const detergente = new Produto("Ypê", 10.00, 0.10)
// detergente.desconto = 0.10
// detergente.precoFinal = detergente.preco - (detergente.preco * detergente.desconto)
console.log(detergente.resumo())

const cafe = new Produto("Estoril", 7.50, 0.15)
// cafe.precoFinal = cafe.preco - (cafe.preco * cafe.desconto)
console.log(cafe.resumo())


class Carro{
    private velocidadeAtual: number = 0 

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){
        
    }

    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >=0
        && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(6)
    }

    public frear(): number{
        return this.alterarVelocidade(-6)
    }
}

const carro1 = new Carro('Ford', 'ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

/* simular erros  
carro1.velocidadeAtual = 300 
console.log('atual =>' + carro1.velocidadeAtual)

carro1.velocidadeMaxima = 500 
console.log('maxima =>' + carro1.velocidadeMaxima)

carro1.alterarVelocidade(150) 
console.log('atual =>' + carro1.velocidadeAtual) */

/* Herança */

class Ferrari extends Carro{
    constructor(modelo: string, velocidadeMaxima: number){
        super("Ferrari", modelo, velocidadeMaxima)
    }
    
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }

}

const f40 = new Ferrari('f40', 340)
console.log(`${f40.modelo} ${f40.marca}`)
console.log(`${f40.modelo} ${f40.marca}`)
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())


// getters and setters

class Pessoa {
    private _idade: number = 0

    get idade(): number{
        return this._idade
    }

    set idade(valor: number){
        if(valor >= 0 && valor <= 110){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10 
console.log(pessoa1.idade)

pessoa1.idade = -3 
console.log(`${pessoa1.idade}`)

/* Atributos e metodos estaticos */ 
class Matematica{
    static PI: number = 3.1416

    static areaCirc(raio: number): number{
        return this.PI * raio * raio
    }
}

/* const m1 = new Matematica()
m1.PI = 4.2
console.log(mi.areaCirc(4)) */

console.log(Matematica.areaCirc(4))

/* Classe abstrata */
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo{
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance(): Unico{
        return Unico.instance
    }
    
    agora(){
        return new Date
    }
}

/* const errado = new Unico() */
console.log(Unico.getInstance().agora())

/* Somente Leitura */

class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)