// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("digite a altura:")
  const largura = prompt("digite a largura:")
  const area = altura * largura
  console.log(area)
 }
// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("digite ano atual:")
  const anoNasc = prompt("digite ano nascimento:")
  const idadeAtual = anoAtual - anoNasc
  console.log(idadeAtual)
}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite uma cor")
  const cor2 = prompt("digite uma cor")
  const cor3 = prompt("digite uma cor")
  console.log([cor1, cor2, cor3])
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1 >= string2
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array.shift()
}
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0]
  const ultimo = array[array.length-1]
  array[0] = ultimo
  array[array.length - 1] = primeiro
  return array
}







// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("insira ano atual")
  let anoNasc = prompt("insira ano nascimento")
  let anoRgEmitida = prompt("insira ano emissão Rg")
  let idade = anoAtual - anoNasc
  let idadeRg = anoAtual - anoRgEmitida
  const result = (idade <= 20 && idadeRg>= 5) || (idade > 20 && idade < 50 && idadeRg >= 10) || (idade > 50 && idadeRg >= 15)

  console.log(result)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBisexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
  return anoBisexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
let maiorIdade = prompt("você tem mais de 18 anos?")
let escolaridade = prompt("possui ensino medio completo?")
let horario = prompt("possui disponibilidade horário?")
const resultado = idade ==='sim' && escolaridade ==='sim' && horario ==='sim'
console.log(resultado)
}