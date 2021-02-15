// Exercício 1 - Classe
class Moto {
  constructor(public nome: String, public velocidade: number = 0) {
    this.nome = nome;
    this.velocidade = velocidade;
  }

  buzinar() {
    return console.log("Biiiiiiiiiiiiiiiiiiip");
  }

  acelerar(delta: number) {
    return (this.velocidade = this.velocidade + delta);
  }
}

const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(`velocidade atual = ${moto.velocidade}`);

// Exercício 2 - Herança
abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {

  }
  abstract area(): number
}

class Retangulo extends Objeto2D {
   area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);
console.log(`A area do triangulo é ${retangulo.area()}`);

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = "Alessandro";

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(valor: string) {
    if (valor.length >= 3) {
        this._primeiroNome = valor
    }
  }
}
const estagiario = new Estagiario;

console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
