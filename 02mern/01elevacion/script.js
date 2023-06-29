// EJEMPLO 1
console.log(hello);                                
var hello = 'world';
// simulacion de la ejecucion e interpretacion
// var hello;
// console.log(hello); logs undefined
// hello = 'world';


// EJEMPLO 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// simulacion de la ejecucion e interpretacion
// var needle = 'haystack';
// console.log(needle); logs magnet


// EJEMPLO 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// simulacion de la ejecucion e interpretacion
// var brendan = 'super cool';
// console.log(brendan); nada porque no hay var definida
// console.log(brendan); super cool

// EJEMPLO 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// simulacion de la ejecucion e interpretacion
// var food = 'chicken';
// console.log(food); logs chicken
// console.log(brendan); logs half chicken

// EJEMPLO 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// simulacion de la ejecucion e interpretacion
// console.log(food); logs undefined
// console.log(food); chicken
// console.log(food); chicken
// console.log(food); logs undefined

// EJEMPLO 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// simulacion de la ejecucion e interpretacion
// var genre;
// console.log(genre); logs undefined
// console.log(genre); logs rock
// console.log(genre); logs r&b
// console.log(genre); logs disco

// EJEMPLO 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// EJEMPLO 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}