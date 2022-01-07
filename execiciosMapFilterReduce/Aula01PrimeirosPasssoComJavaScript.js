// c-like 

const valor = 10
if(valor === 10 ) {

}


var valor2 = 20
valor2 = 30

console.log(valor, valor2)

const objeto = {
    chave: 'valor1',
    chave2: 'valor2'
}

console.log(objeto)


const str = ' Everton Eduardo - DevPleno '

// Functions are firat class citizens

const soma = function(a , b) {
    return a + b
}

const calculadora = function (op, a, b) {
    return op(a, b)
}

console.log(calculadora(soma,20 , 50))

const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function(item){
    return item * 2
})
console.log(vetor, dobrado)

console.log('-----------')
console.log('-----------')
console.log('-----------')

const vetor2 = [1, 2, 3, 4, 5]
const dobrado3 = vetor2.map(function(item){
    return {Original: item , Dobrado: item * 2}
})
console.log(vetor2, dobrado3)
const pares = vetor.filter(function(par) {
  return  par % 2 === 0

})

console.log('PAr:' , pares)

const dobrado5 = vetor.filter(function(par) {
    return  par % 2 === 0
  
  }).map(function(dobra) {
      return dobra * 2
  })

  console.log('Dobrados:' , dobrado5)

  // arrow function
  const dobra6 = dobra => {
     return dobra * 2
  }

  const dobrado6 = vetor.filter(function(par) {
    return  par % 2 === 0
  
  }).map(dobra6)

  console.log('Dobrados:' , dobrado6)

  const somar7 = (acumulado,atual) => acumulado + atual
  const somatorio = dobrado6.reduce(somar7,12)
  console.log('Somar com reduce', somatorio)
