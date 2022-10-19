//  H1 LEVELING UP FUNCTIONS

// H2 FUNCTION SCOPE

// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// 6
// undefined

// function collectEggs(){
//     let totalEggs = 6;
    
// }
// console.log(totalEggs);

// lvlfunct.js:13 Uncaught ReferenceError: totalEggs is not defined
//     at lvlfunct.js:13:13

    // function collectEggs(){
    //     let totalEggs = 6;
        
    // }

    // function collectEggs();
    // console.log(totalEggs);

    // Uncaught SyntaxError: Unexpected token ';' (at lvlfunct.js:23:27)

// uncommon
    // let totalEggs = 0;
    // function collectEggs(){
    //     totalEggs = 6;
        
    // }
    // console.log(totalEggs);
    //  collectEggs();
    // console.log(totalEggs);



//     let bird = 'raven'
//     function birdWatch (){
//         let bird = 'GB Heron';
        
//     }
// console.log(bird);

// Returns Raven

// let bird = 'raven'
// function birdWatch (){
//     let bird = 'GB Heron';
//     console.log(bird);
// }
// birdWatch()

// h3 PRACTICE
// returns GB Heron

// const creature = "Common Sea Dragon";
 
// function scubaDive(){
//     const creature = "Spanish Dancer"; //A type of sea slug
//     console.log(creature);
// }
 
// scubaDive();

// let deadlyAnimal = "Blue-Ringed Octopus";
 
// function handleAnimal() {
//     let deadlyAnimal = "Scorpionfish";
//     console.log(deadlyAnimal);
// }
 
// handleAnimal();
// console.log(deadlyAnimal)


// H2 SCOPE
// let radius = 8;
// if(radius>0) {
//     const PI = 3.14159;
//     let msg = 'HI!'
// }

// console.log(radius);

// return 8

// let radius = 8;
// if(radius>0) {
//     const PI = 3.14159;
//     let msg = 'HI!'
// }

// console.log(radius);
// console.log(PI);

// 8
// lvlfunct.js:101 Uncaught ReferenceError: PI is not defined
//     at lvlfunct.js:101:13

// let radius = 8;
// if(radius>0) {
//     const PI = 3.14159;
//     let msg = 'HI!'
// }

// console.log(radius);
// console.log(PI); //Scoped to this block

// H2 Lexical Scoping

// function bankRobbery (){
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
//     function cryForHelp(){
//         function inner (){
//         for(let hero of heroes) {
//             console.log(`Please Help Us, ${heroes.toLocaleUpperCase}`)
//         }
//      }
//      inner();
//     }
//     cryForHelp();
// }

// H2 Function Expression

// function add (x, y){
//     return x+y;
// }

// const square = function (num){
//     return num*num;
// }
// square(7);

// const add = function (x, y){
//     return x+y;
// }

// const square = function (math.pow(x,x)){
//     return x;
// }
// // console.log(square);

// let greet = function(){
//     console.log("HI!")
// }

// function callTwice (func){
//     func();
//     func();
// }

// function callTenTimes(f){
//     for(let i = 0; i < 10; i++)f()
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)

// H2 RETURNING FUNCTIONS

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("Congrats Good Function")
//             console.log("YOU WIN")
//         }
//     }else {
//             return function(){
//                 alert("you have been infected with a computer virus")
//                 alert("Stop trying to close window")
//                 alert("Stop trying to close window")
//                 alert("Stop trying to close window")

//             }
//         }
//     }

function makeBetweenFunk(min,max){
    return function(num){
        return num >= min && num <= max;
    }
}

// makeBetweenFunk(5,10) =>
// function isBetweenlg (num){
//     return num >= 50 && num <= 100
// }

// function isBetween (num){
//     return num >= 1 && num <= 10
// }

// makeBetweenFunk
// ƒ makeBetweenFunk(min,max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }
// makeBetweenFunk(100,200)
// ƒ (num){
//         return num >= min && num <= max;
//     }
// const isChild makeBetweenFunk(0,18)
// VM610:1 Uncaught SyntaxError: Missing initializer in const declaration
// const isChild = makeBetweenFunk(0,18)
// undefined
// isChild
// ƒ (num){
//         return num >= min && num <= max;
//     }
// isChild(40)
// false
// isChild(7)
// true

// H2 FUNCTION METHODS
// "hello".toUpperCase
// "HELLO"

// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num*num;  //ANSWER TO PREVIOUS
//     },
//     cube: function (num){
//         return num ** 3;
//     }
// }

// //shorthand/shortcut

// const myMath = {
//     PI: 3.14159,
//     square(num){
//         return num*num;  //ANSWER TO PREVIOUS
//     },
//     cube(num){
//         return num ** 3;
//     }
// }

// // practice
// const square = {
    
//     area(num){
//         return num*num;  //ANSWER TO PREVIOUS
//     },
//     perimeter(num){
//         return num * 4;
//     }
// }
// I GOT THIS ONE ON MY OWN!!

// H2 THIS IN METHODS

// const cat = {
//     name: 'Blue Steel',
//     color: 'grey',
//     breed: 'scottich fold',
//     meow(){
//         console.log( MEOWW`);
//     }
// }

// const cat = {
//     name: 'Blue Steel',
//     color: 'grey',
//     breed: 'scottich fold',
//     meow(){
//         console.log("THIS IS:", this); 
//         console.log(`${this.name} says MEOWW`);
//     }
// }


// Practice 46
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg (){
//         this.eggCount ++;
//         return ('EGG');
//     } 
// };

//     meow(){
//         console.log("THIS IS:", this); 
//         console.log(`${this.name} says MEOWW`);
//     }
// }

// H2 Try/Catch

// hello.toUpperCase();

// lvlfunct.js:307 Uncaught ReferenceError: hello is not defined
//     at lvlfunct.js:307:1

    // try {
    //     hello.toUpperCase();
    // }

    // Uncaught SyntaxError: Missing catch or finally after try 
    // (at lvlfunct.js:314:5)

    // try {
    //     hello.toUpperCase();
    // } catch {
    //     console.log("ERROR")
    // }

    // console/log("after")

//     function yell(msg){
//         console.log(msg.toUpperCase().repeat(3));
//     }

//     yell('hello')

// lvlfunct.js:328 HELLOHELLOHELLO
// undefined
// yell(1234)
// lvlfunct.js:328 Uncaught TypeError: msg.toUpperCase is not a function
//     at yell (lvlfunct.js:328:25)
//     at <anonymous>:1:1


    // function yell(msg){
    //     try {
    //     console.log(msg.toUpperCase().repeat(3));
    //     } catch (e) {
    //         console.log(e);
    //         console.log("Please pass string next time!")
        
    //     }
    // }

//     yell(1234)
// lvlfunct.js:345 TypeError: msg.toUpperCase is not a function
//     at yell (lvlfunct.js:343:25)
//     at <anonymous>:1:1
// lvlfunct.js:346 Please pass string next time!
// undefined

// yell('hello')
// lvlfunct.js:343 HELLOHELLOHELLO
// undefined