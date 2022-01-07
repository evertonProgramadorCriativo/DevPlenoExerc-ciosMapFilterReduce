/**Dado um vetor de valores, retorne um vetor com somente os valores
 * únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor )
 * (Dica 1: Utilize reduce, filter e Keys, Dica 2: escreva console.log
 * (Object.keys()) e veja como ele poderá te ajudar neste exercício) 
 */

const vetor = [1,2,2,3,4,5,5,'dudu','dudu']
const howManyTimes = (agg, val ) => {
    if(!agg[val]) {
        agg[val] = {
            value: val,
            occur: 0
        }
    }
    agg[val].occur = agg[val].occur + 1
    return agg
}

//console.log(vetor.reduce(howManyTimes, {}))

const contagem = vetor.reduce(howManyTimes, {})
const Keys = Object.keys(contagem)
const unique = Keys.filter(key => contagem[key].occur === 1)
//console.log(unique ,contagem)
const uniqueValues = unique.map( val => contagem[val].value)
console.log(uniqueValues)