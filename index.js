var cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name= "Ralph"){
    return cats.push(name)
   
}
function destructivelyPrependCat(name="Bob"){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat (name="Broom"){
    var cats2 = cats.slice()
    cats2.push(name)
    return cats2
   
}
function prependCat(name){
   var cats2 = cats.slice()
   cats2.unshift(name)
   return cats2

}
function removeLastCat(){
    var cats2 = cats.slice()
    cats2.pop()
    return cats2 
}
function removeFirstCat(){
    var cats2 = cats.slice()
    cats2.shift()
    return cats2
}