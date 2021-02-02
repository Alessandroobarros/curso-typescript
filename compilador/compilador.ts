
let canal: string = "Gaveta"
let inscritos: number = 610234

// canal = inscritos
console.log(`canal = ${canal}`)

// let nome = 'Pedro'
console.log(`Nome = ${nome}`) //esta buscando valor da variavel de outro arquivo


function soma(a: any , b: any ) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12 
qualquerCoisa = "abc"


function saudar (isManha: boolean): string {
    // let a = 1
    let saudacao: string
    if(isManha){
        saudacao = "Bom dia"
    }    else {
        saudacao = "Tenha uma boa vida"
    }
    return saudacao
}