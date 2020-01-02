let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!isativo)

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!"texto")
console.log(!!{})
console.log(!![])
console.log(!!Infinity)


console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))

let nome = ''
console.log(nome || "Desconhecido")

