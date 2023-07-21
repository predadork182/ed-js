function Stack(){

    var items = []

    this.push = function(element){
        // adiciona um item a pilha
        items.push(element)
    }

    this.clear = function() {
        items = []
    }

    this.pop = function() {
       return items.pop()
    }

    this.isEmpty = function() {
       return items.length === 0
    }

    this.size = function() {
        return items.length
    }

    this.peek = function() {
        // pega o último elemento do topo da pilha
        return items[items.length - 1]
    }

    this.print = function(){
        console.log(items.toString())
    }

    this.remove = function(element){
        return items.splice(element, 1);
    }

}

var teste = new Stack();

teste.push(5)
teste.print()
teste.push(6)
teste.print()
teste.push(7)
// teste.clear()
// teste.pop()
// teste.print()
// console.log(teste.peek())
teste.remove()
teste.print()
