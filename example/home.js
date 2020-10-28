// //defining a variable and setting it equal to a string 
// // var b = 'smoothie';

// //making a prompt and setting it equal to a variable
// // var age = prompt('What age are you?')
// let takeover = 'this is your new sentence speaking for you.'

// //manipulating the document and getting its ID and setting it equal to the variable
// document.getElementById('someText').innerHTML = takeover;

// var num1 = 10;

// num1 += 10
// console.log(num1);


/*
1. Create the function
2. Call the function 
*/
// function fun() {
//     alert('This function is going to do something.')
// }

// fun()

//function that returns a simple greeting 
// function greeting(){
//     let name = prompt('What is your name?')
//     let result = 'Hello ' + name
//     console.log(result);
// }

// greeting()

// function greeting(YourName){
//     greet = 'Hello ' + YourName + ' nice to meet you.'
//     console.log(greet)
// }

// let name = prompt('What is your name?')
// greeting(name);

/*while loop 
let num = 0;

while (num<10){
    num += 1
    saying = 'This is number ' + num
    console.log(saying)}
*/

//For Loop

// for (let num = 0; num < 25; num++){
//     console.log(num)
// }

//data structures 
// let num = 28;
// let string = 'this is a string';
// let object = {First: Mavrick, Last: Watts};
// let boolean = True;
// let array = ['apple', 'banana', 'cheese'];

//Using .length
// let pokemon = 'This is a random sentence about pokemon. Mewtwo will always be the goat of pokemon legends.'
// console.log(pokemon.length)


//slicing
// let name = 'Mavrick, thomas, watts,';

//splitting
// console.log(name.split(','))

// let newname= name.slice(1, 6)
// console.log(newname)

//arrives at answer "avric" because you start at 1 index and keep everything except the 6   


// let name = "Mavrick";
// let lastName = 'WATTS';

// console.log(name.toUpperCase())
// console.log(lastName.toLowerCase())

//arrays and indexing into them
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(pokemonTeam[2]);

//looping through an array
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// for (i=0; i < pokemonTeam.length; i++){
//     console.log(pokemonTeam[i])
// }

//using join method
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(pokemonTeam.join('-'))

//using pop method
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(pokemonTeam, pokemonTeam.pop(), pokemonTeam)

//using push method
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(pokemonTeam.push('voltorb'), pokemonTeam)

//using shift method
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(pokemonTeam.shift(), pokemonTeam)

//using unshift method to add to the beginning of an array 
// let pokemonTeam = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(pokemonTeam.unshift('zapdos'), pokemonTeam)

//concatenating two different arrays together
// let genOne = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// let genTwo = ['cindaquille', 'todadile', 'lugia', 'ho-oh', 'hoot hoot', 'enteie'];

// let combinedTeams = genOne.concat(genTwo)
// console.log(combinedTeams)


// let genOne = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(genOne.slice(1, 4));

//reversing an array 
// let genOne = ['pikachu', 'mewtwo', 'dragonite', 'blastoise', 'charizard', 'venasaur'];
// console.log(genOne.reverse())

//sorting an array 
// let nums = [12, 53, 84, 28, 29, 21, 25, 18, 16, 16, 4]
// console.log(nums.sort())

//adding to an array 
// let pc = [];
// let nums = [12, 53, 84, 28, 29, 21, 25, 18, 16, 16, 4]


// for (num = 0; num < 25; num++){
//     pc.push(num)
// }
// console.log(pc)


//objects in javascript 
// let student = {
//     firstName: 'Mavrick', 
//     lastName: 'Watts', 
//     age: 28, 
//     weight: 182,
//     greeting: function(){
//         console.log('Ayo B!')
//     }
// };
// console.log(student.greeting())


//conditionals and control flows 
//&& = AND
//|| = OR
// let age = prompt('What is your age?')

// if ((age >= 18) && (age <= 21)){
//     status = 'Target Demo'
//     console.log(status)
// } else {
//     status = 'Not my audience'
//     console.log(status)
// }

let i = 0
while (i<30){
    i++
    console.log(i)
}