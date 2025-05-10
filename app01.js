// // Boas práticas
// // Case sensitive
// // Sintaxe básica e comentário
// // Declaração de variáveis(var, let, const)
let nome = "Anailton"
let idade = 19

// // Console e Debug
console.log(nome)
console.log(idade)
nome = "alberto"
idade = "60"
console.log(nome, idade)

//tipos de dados
// text == string
let cidade = "americana"

//númerico == number
let salario = 1500.35

//boleano == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// // Operadores
// //     Operador Atribuição ( = )
// //     Operadores aritméticos (+, -, /, *, % )

console.log(10 + 15)
let n1 = 10
let n2 = 5
console.log(n1 + n2) // soma
console.log(n1 - n2) // subtração
console.log(n1 / n2) // divisão
console.log(n1 * n2) // multiplicação
console.log(n1 % n2) // módulo (resto da divisão)

// //     Operadores relacionais ( >, <, >=, <=, !=, == )

console.log(n1 == n2)
console.log(n1 != n2)
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 <= n2)
console.log(n1 >= n2)

// // operadores lógicos (!, &&, || )

console.log(!10 > 2) // não - inverte o resultado, se for verdadeiro muda pra falso, se for falso muda pra verdadeiro
console.log(!false)

console.log(10 > 2 && 35 < 100 && n1 > n2 && 100 < 90) // E - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10 < 2 || 100 == 150 || 57 == 57) // ou - apenas uma verificação, precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificações forem falsas

//desafio 
preço = 100
preçoacrescimo = 0
preçodesconto = 0

//faça um código que acrescente 17% ao preço o imprima 

preçoacrescimo = preço + (preço * 0, 17)
console.log("preço com acrescimo: " + preçoacrescimo)

//faça um código que desconte 7% do preço e imprima 

preçodesconto = preço - (preço * 0.07)
console.log("preço com desconto: " + preçodesconto)

// // Estrutura
// //     Estrutura de controle/decisão
if (10 > 5) {
    console.log("10 é maior que 5")
} else {
    console.log("10 é menor que 100")
}

let idadedocandidato = 17
if (idadedocandidato >= 18) {
    console.log("pode dirigir")
} else {
    console.log("volte mais tarde")
}

//desafio
//faça um códigoque verifique se o salario do funcionario é maior que 5000, se for mostre a mensagem "salario ok" se não mostre a mensagem "precisa de aumento"

let salariofunc = 3000
if (salariofunc > 5000) {
    console.log("salario ok")
} else {
    console.log("precisa de aumento de " + (5000 - salariofunc) + " reais ")
}

// //     Laços de repetição
// quero mostrar 10 vezes a mensagem "Senac americana"

let controle = 1 
while(controle <= 0){
    console.log("senac americana")
    controle = controle + 1
}

 controle = 1 // definição da variavel de controle
while(controle <= 100){ // condição
    console.log(controle)
    controle = controle + 2 // incremento
}

// mostar 10 vezes "Senac americana"
for(let i=1; i<=10; i=i+1){
    console.log("Senac americana")
}

for(let i=1; i<=50; i=i+1){
    console.log(i)
}

// // Arrays --> vetor
let alunos = ["jõao", "paulo", "renata", "cris", "x"]
console.log(alunos)
console.log(alunos[3])
alunos[4] = "kleber"
console.log(alunos)
alunos.push("karem")
console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🍓")
frutas.push("🍍")
frutas.push("🥑")
frutas.push("🥭")
frutas.push("🍇")
frutas.push("🍈")
frutas.push("🍉")
frutas.push("🍌")
frutas.push("🍎")
frutas.push("🍏")
console.log(frutas)

// // Funções básicas
function soma(num1, num2){
  let total = num1 + num2
  console.log("o resutado é " + total)
}

soma(100 , 14)
soma(7 , 3)

// // Escopo


// // Alterar conteúdo e atributos *
// // incluir js em página html *
// // Eventos *
// // DOM *
// // Objeto
// // parâmetros e retorno*

// // Programação assíncrona***
// // API Fetch ***

// // JSON ****
// // funções modernas (arrow functions) ****


// // Spread e REST  ************
