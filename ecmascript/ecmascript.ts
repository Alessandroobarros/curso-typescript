// let e const
let seraQuePode = "?"; //hoisting pode ser chamada em qualquer momento do programa, pois ela sera declarada emcinma e atribuida valor embaixo

console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "colocar casaco !";
  console.log(acao);
}

// const teste

const cpf: string = "123.456.789-00";
// cpf = '123.123.123-00'
console.log(cpf);

//arrow function
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(23, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;

console.log(subtrair(8, 4));

const saudacao = () => console.log("olá!");

saudacao();

const falarCom = (pessoa: string) => console.log("olá", pessoa);
falarCom("joao");

//this

// function normalComThis(){
//     console.log(this)
// }

// normalComThis()

// const normalComThisEspecial = normalComThis.bind({nome: 'ana'})
// normalComThisEspecial()

//this ?
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis.bind({nome: 'ana'})
// arrowComThisEspecial()

//parametros padra
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5) {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("fim !");
}

contagemRegressiva();
contagemRegressiva(2);

// Rest e Spread
const numbers = [1, 10, 99, -25, 1000];
console.log(Math.max(...numbers));

const turmaA: string[] = ["João", "Paulo", "Moiséis", "José"];
console.log(turmaA);
const turmaB: string[] = ["Castiel", ...turmaA, "Dean"];
console.log(turmaB);

function retornarArray(a: number, ...args: number[]): number[] {
  console.log(a);
  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6, 7, 8, 100);
console.log(numeros);

//Rest e Spread
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  // console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

//Destructuring (array)
const caracteristicas = ["Zetec 1.8", "2020"];

// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas;
console.log(`motor ${motor}`);
console.log(`ano ${ano}`);

// Destructuring (objeto)
const item = {
  nome: "SSD 480GB",
  preco: 200,
  caracteristicas: {
    w: "importado",
  },
};

const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);

const {
  nome: n,
  preco: p,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(p);
console.log(w);

const usuarioID: string = "SuporteCoder";
const notificacoes: string = "8";
// const boasVindas = 'Boas Vindas ' + usuarioID + ' Notificacoes: ' + notificacoes
const boasVindas = `Boas vindas : ${usuarioID}, Notificações: ${
  parseInt(notificacoes) > 9 ? "+9" : notificacoes
}`;

console.log(boasVindas);
console.log(``);

// Exercicio 01
// var dobro = function(valor) {
//     return valor * 2
//     }
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

// Exercicio 02
const dizerOla = (nome: string = "Pessoa"): void => {
  console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");

//Exercicio 03
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

//Exercicio 04
const array = [55, 20];
array.push(...nums);
console.log(array);

//Exercicio 05
const notas = [8.5, 6.3, 9.4];
const [n1, n2, n3] = notas;
console.log(`Nota 01= ${n1}, Nota 02= ${n2}, Nota 03= ${n3}`);

//Exercicio 06
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome: pnome, experiencia: xp } = cientista;
console.log(`Nome = ${pnome}`);
console.log(`experiencia = ${xp}`);

// Callback

function esperar3s(Callback: (dado: string) => void) {
  setTimeout(() => {
    Callback("3s depois...");
  }, 300);
}

const resultado = esperar3s(function (resultado: string) {
  console.log(resultado);
});

function esperar3sPromisse() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois...");
    }, 300);
  });
}

// esperar3sPromise()
// .then(dado => console.log(dado))

fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))

