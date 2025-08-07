console.log('=-=-=-=-=-=-=-=-=-= BEM-VINDO AO CALCULADORA DE IMC =-=-=-=-=-=-=-=-=-=\n')

console.log('Informe o seu peso (kg):')
let peso = 150
console.log('Peso informado: ' + peso + 'kg\n')
console.log('Informe sua altura (cm):')
let altura = 180
console.log('Altura informada: ' + altura + 'cm\n')

let imc = peso / ((altura / 100) ** 2)
console.log('IMC calculado: ' + Math.trunc(imc) + '\n')

if (imc < 18.5) {
    console.log('===================================')
    console.log('Classificação: Abaixo do peso')
    console.log('===================================')
} else if (imc >= 18.5 && imc < 24.9) {
    console.log('===================================')  
    console.log('Classificação: Peso normal')
    console.log('===================================')
} else if (imc >= 25 && imc < 29.9) {
    console.log('===================================')
    console.log('Classificação: Sobrepeso')
    console.log('===================================')
} else {
    console.log('===================================')
    console.log('Classificação: Obesidade')
    console.log('===================================')
}
