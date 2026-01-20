//  chamada da função
let resultado = nivelDoHeroi(75, 20)


function nivelDoHeroi(QtdVitorias, QtdDerrotas) {
    //calcula o saldo das vitorias
    let saldoRankeadas = QtdVitorias - QtdDerrotas

    // variavel onde declara o nivel 
    let nivel = ""

    // estrutura de decisão
    if (QtdVitorias < 10) {
        nivel = "Ferro"
    } else if (QtdVitorias >= 11 && QtdVitorias <= 20) {
        nivel = "Bronze"
    } else if (QtdVitorias >= 21 && QtdVitorias <= 50) {
        nivel = "Prata"
    } else if (QtdVitorias >= 51 && QtdVitorias <= 80) {
        nivel = "Ouro"
    } else if (QtdVitorias >= 81 && QtdVitorias <= 90) {
        nivel = "Diamante"
    } else if (QtdVitorias >= 91 && QtdVitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    
    // retorno da Saída
    return { saldoRankeadas, nivel }
}

// saída final
console.log( "O Herói tem saldo de " + resultado.saldoRankeadas + " e está no nível de " + resultado.nivel )


