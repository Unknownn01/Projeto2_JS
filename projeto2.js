let saldo_Vitorias = Calcula_rank(106, 10)

function Calcula_rank(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let nivel = ""

if (saldo_Vitorias < 10) {
  nivel = "Ferro"
} else if (saldo_Vitorias > 11 && saldo_Vitorias <= 20) {
  nivel = "Bronze"
} else if (saldo_Vitorias > 21 && saldo_Vitorias <= 50) {
  nivel = "Prata"
} else if (saldo_Vitorias > 51 && saldo_Vitorias < 80) {
  nivel = "Ouro"
} else if (saldo_Vitorias > 81 && saldo_Vitorias <= 90) {
  nivel = "Diamante"
} else if (saldo_Vitorias > 91 && saldo_Vitorias <= 100) {
  nivel = "Lendario"
} else if (saldo_Vitorias > 101) {
  nivel = "Imortal"
}

console.log(`O heroi tem saldo de Vitorias de ${saldo_Vitorias} e esta no nivel ${nivel}`)