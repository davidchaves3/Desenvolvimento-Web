//Crie uma arrow function chamada dobrar que recebe um array de números e 
// retorna outro array com todos os números dobrados.

const dobrar = numeros => numeros.map(n => n * 2);

//Testando 
console.log(dobrar([1, 2, 3]));

//Crie uma arrow function chamada filtrarPares 
// que recebe um array de números e retorna apenas os pares.
const filtrarPares = numeros => numeros.filter(n => n % 2 == 0);

// Testando
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filtrarPares([7, 9, 11])); // []
