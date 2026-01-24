

let entrada_usuario = prompt('choose rock paper or scissors')

const objetos = {
    rock: 1,
    paper: 2,
    scissors: 3
}

const nomes = {
    1: "rock",
    2: "paper",
    3: "scissor"
}


function escolha_pc(){
    const computer_choice = Math.floor(Math.random()*3)+1
    const computer = computer_choice
    return computer
}

escolha_pc()

const computer = escolha_pc()

const escolha_usuario = objetos[entrada_usuario]
const escolha_computador = nomes[computer]

console.log(escolha_usuario)
console.log(escolha_computador)



