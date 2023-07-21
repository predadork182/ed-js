// function Stack() {

//     var items = []

//     this.push = function(element) { 
//         // adiciona um novo item a pilha
//         items.push(element)
//     }

//     this.pop = function() {
//         // remove o item do topo da pilha
//         return items.pop()
//     }

//     this.peek = function() {
//         // devolve o elemento que está no topo da pilha
//         return items[items.length - 1]
//     }

//     this.isEmpty = function() {
//         // informar se a pilha está vazia ou não
//         return items.length === 0
//     }

//     this.clear = function() {
//         // limpa a pilha
//         items = []
//     }

//     this.size = function() {
//         // informar o tamanho da pilha
//         return items.length
//     }

//     this.print = function() {
//         //  imprime a pilha no console
//         console.log(items.toString())
//     }

// }

// var pilha = new Stack()

// pilha.push(5)
// pilha.print()
// pilha.push(8)
// pilha.print()
// pilha.push(11)
// pilha.print()
// pilha.push(15)
// pilha.print()

// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// console.log(pilha.isEmpty())

// function dec2Bin(decNumber){ // 23
//     var restStack = [], 
//     rest, 
//     binaryString = ''
 
//     while(decNumber > 0) { // 1
//         rest = Math.floor(decNumber % 2) // 1
//         restStack.push(rest) // [1,1,1,0,1]
//         decNumber = Math.floor(decNumber / 2) //1
//     }

//     while(restStack.length > 0) {
//         binaryString += restStack.pop().toString()
//     }

//     return binaryString;
// }

// console.log(dec2Bin(25))

// converter para base decimal
// https://www.calculadoraonline.com.br/conversao-bases
function baseConverter(decNumber, base) {

    var restStack = [], //  [11,7]
    rest, 
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0) { // 123/7
        rest = Math.floor(decNumber % base) //11/7
        restStack.push(rest) // [11,7]
        decNumber = Math.floor(decNumber / base) // 7/0
    }

    while(restStack.length > 0) { // 2/1
        baseString += digits[restStack.pop()] // 7B // pop retorna o valore removido e modifica o array principal
    }

    return baseString

}
console.log(baseConverter(123,16))