/**
 * Modifique a calcuuladora do exercício anterior para que receba
 * 2 números e uma função, e realize o cálculo. Exemplo:
 * const soma = (num1, num2) => num1+num2
const calculadoraFn = (...) => ...
calculadoraFn(10,soma,20)
*/
const calculadoraFn = (num1, op, num2) => op(num1, num2)

const soma = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
console.log(calculadoraFn(10,soma,20))
console.log(calculadoraFn(10,sub,20))