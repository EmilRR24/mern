console.log(hello);                                   
var hello = 'world';    
// prediction = undefined; hello will balloon to the top with no value
// var hello = 
// console.log(hello); 
// var hello = 'world'; 
// output = undefined

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// prediction = error for test(); since function is defined after test() 
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();
// output = magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// prediction = super cool
// var brendan = 'super cool'; // var assigned
// function print(){   // function assigned
//     brendan = 'only okay'; // var assigned
//     console.log(brendan);  // print
// }
// console.log(brendan); // print
// output = super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// prediction = chicken, half-chicken
// var food = 'chicken'; // var assign
// console.log(food);  // print
// function eat(){ // def function
//     food = 'half-chicken'; // var assign
//     console.log(food); // print
//     var food = 'gone'; // var assigned
// }
// eat(); // call function
//output = chicken, half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// prediction =  undefined, chicken, fish
// var mean =  // var called
// mean(); // called funcion
// console.log(food); // print var
// function() { //var assign and function assignment without function being defined
//     food = "chicken"; // var assign
//     console.log(food); // print var
//     var food = "fish"; // var assign
//     console.log(food); // print var
// }
// console.log(food);
// output = error

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
//prediction = undefined, rock, r&b, disco
// var genre = // var defined
// console.log(genre); // print var
// var genre = "disco"; // var assign
// function rewind() { // function declared and assigned
//     genre = "rock"; // var assign
//     console.log(genre); // print var
//     var genre = "r&b"; // var assign
//     console.log(genre); // print var
// } 
// rewind(); // function called
// console.log(genre); // print var
// output = undefined, rock, r&b, disco

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
// prediction = san jose, seatle, burbank, burbank
// dojo = "san jose"; // var assigned
// console.log(dojo); // print var
// function learn() { // function declared and assigned
    //     dojo = "seattle"; // var assigned
    //     console.log(dojo); // print var
    //     var dojo = "burbank"; // var assign
    //     console.log(dojo); // print var
    // }
    // learn(); // function called
// console.log(dojo);
//output san jose, seattle, burbank, san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}
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
// prediction = error; dojo is a const and you can't change the data type to string
// console.log(makeDojo("Chicago", 65)); // print function 
// console.log(makeDojo("Berkeley", 0)); // print function
// function makeDojo(name, students){ // function declared and assigned
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// output = TypeError: Assignment to constant variable.