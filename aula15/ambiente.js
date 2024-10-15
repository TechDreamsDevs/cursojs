let num = [5, 8, 2, 9, 3]
num[5] = 20
num.push(27)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(11)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
}
console.log(`O valor está na posição ${pos}`)
