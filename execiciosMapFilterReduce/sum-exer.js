/*Dado um vetor de números, como poderia ser 
realizada a asoma de todos os valores utilizando reduce. */

const vetor = [1,2,3,4,5]
const somadora = (valorAnterior, valorAtual) => {
return valorAnterior + valorAtual
}

console.log(vetor.reduce(somadora))


const vetorNumerosPares = [1,2,3,4,5]


/*Dado um vetor de números, Como Poderia ser realizada 
a soma de todos os valores pares Utilizando reduce e filter */

const vetor2 = [1,2,3,4,5]
const ehPar2 = numero => numero % 2 === 0
const pares2 = vetor2.filter(ehPar2)
const somadora2 = (total, atual) => total + atual
const soma2 = pares2.reduce(somadora2, 0)
console.log('soma dos pares', soma2 )

/*Dado um vetor de números, como poderia ser realizada a soma de 
todos os valores ímpares utilizando reduce e filter. */

const vetor3 = [1,2,3,4,5]
const ehImpar =  valor3 => valor3 % 2 !== 0
const somadora3 = (atual, valor) => atual + valor
const soma3 = vetor3.filter(ehImpar).reduce(somadora3)
console.log('É  impar ?' + ' ' + soma3)

/*Dado um vetor de valores, retorne um objeto com quantas vezes  cada
valor está presente no  vetor (dica: utilize reduce)
passo 00
*/

const vetor4 = [1,2,3,4,2,1,3,2,1]
const howManyTimes2 =  (curr, val) => {
    console.log(curr,val)
}
vetor4.reduce(howManyTimes2, {})

/**Na Primeira vez que ele passa  {} 1
 * 
 * na segunda vez dar undefined  por que não tem return
*/

/*Dado um vetor de valores, retorne um objeto com quantas vezes  cada
valor está presente no  vetor (dica: utilize reduce)
passo 01
*/

const vetor5 = [1,2,3,4,2,1,3,2,1]
const howManyTimes =  (curr, val) => {
    curr[val] = 1
    console.log(curr,val)
    return curr
}
vetor5.reduce(howManyTimes, {})

/**Na Primeira vez que ele passa  {} 1
 * 
 * na segunda vez dar undefined  por que não tem return
*/

/*Dado um vetor de valores, retorne um objeto com quantas vezes  cada
valor está presente no  vetor (dica: utilize reduce)
passo 02
*/
console.log('----------------------------------')
const vetor6 = [1,2,3,4,2,1,3,2,1]
const howManyTimes3 =  (agg, val) => {
    if(!agg[val]) { //thuthy é um conjuto de valores que retorna true , sendo que nesse codigo ele que apenas os falsos
 agg[val] = 0
    }
    agg[val] = agg[val] + 1
    return agg
  
}
const times = vetor6.reduce(howManyTimes3, {})
console.log(times)

/**Na Primeira vez que ele passa  {} 1
 * 
 * na segunda vez dar undefined  por que não tem return
*/