const cats = ["Milo", "Otis", "Garfield"];
function beforeEach(){
    cats.legnth = 0;
    cats.push("Milo", "Otis", "Garfield");
    return cats[2]
}
console.log(beforeEach());
function destructivelyAppendCat(){
    cats.length = 3;
    cats.push(["Milo", "Otis", "Garfield", "Ralph"]);
    return cats[3]
}
console.log(destructivelyAppendCat());
function destructivelyPrependCat(){
    cats.length = 0;
    cats.push(["Bob", "Milo", "Otis", "Garfield"]);
    return cats[0]
    
}
console.log(destructivelyPrependCat());
function destructivelyRemoveLastCat(){
    cats.length = 0;
    cats.push(["Otis", "Garfield"])
    return cats[0];

}
console.log(destructivelyRemoveLastCat());
function appendCat(){
    cats.length = 3;
    cats.push(["Milo", "Otis", "Garfield", "Broom"]);
    return cats[3];
}
console.log(appendCat());
function prependCat(){
    cats.length = 0;
    cats.push(["Arnold", "Milo", "Otis", "Garfield"])
    return cats[0]
}
console.log(prependCat())
function removeLastCat(){
    cats.length = 2;
    cats.push(["Milo", "Otis"])
    return cats[2]
}
console.log(removeLastCat());
function removeFirstCat(){
    cats.length = 0;
    cats.push(["Otis", "Garfield"])
    return cats[0]
}
console.log(removeFirstCat())