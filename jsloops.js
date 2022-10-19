// for (
//     [initial expression]
//     [condition];
//     [incrementExpression]
// )

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i=1; i<=6; i++){
//     console.log (" Da ba dee da ba daa")
//     console.log(i);
// }
// for (let num =1; num<=6; num +=1){
//     console.log ("Da ba dee da ba daa")
//     console.log (num);
// }

// increment in 2s

// for (let i=1; i<=20; i+= 2){
    
//     console.log(i);
// }

// Subtraction in increment

// for (let i=100; i>=0; i-= 10){
    
//     console.log(i);
// }

// multiplication in increment

// for (let i=10; i<=1000; i *= 10){
    
//     console.log(i);
// }


// pract
// for (let i=25; i>=0; i-= 5){
    
//     console.log(i);
// }


// H1 INFINITE LOOPS

// DO NOT RUN
// for (let i=25; i>=0; i++){
    
//     console.log(i);
// }
// DO NOT RUN

// H1 LOOPING OVER ARRAYS
// const animals = [
//     "Aardvark",
//     "Aardwolf",
//     "African Elephant",
//     "African Tree Pangolin",
//     "Alligator",
//     "Alpaca",
//     "Anteater",
//     "Antelope",
//     "Ape(s)",
//     "Arabian Horse",
//     "Armadillo",
//     "Arthropod(s)",
//     "Asian Elephant",
//     "Aye-Aye",
//     "Baboon",
//     "Badger",
//     "Bandicoot",
//     "Bangle Tiger",
//     "Bat(s)",
//     "Bearded Dragon",
//     "Beaver",
//     "Beluga Whale",
//     "Bengal Tiger",
//     "Big-Horned Sheep",
//     "Billy Goat",
//     "Bird(s)",
//     "Bison",
//     "Black Bear",
//     "Black Footed Rhino",
//     "Black Howler Monkey",
//     "Black Rhino",
   
// ]



// for (let i=0; i< animals.length; i++){
//     console.log(i,animals[i])
// }


// inverse array pull

// for (let i=animals.length-1; i>=0 ; i--){
//     console.log(animals[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i=0; i< people.length; i++){
//     console.log (people[i].toUpperCase())
// }


// h2 NESTED LOOPS
// for (let i=1; i<= 10; i++){
//     console.log(`i is: ${i}`)

//         for (let j= 1; j<=4; j++) {
//             console.log(`     j is: ${j}`)
//         }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i=0; i< seatingChart.length; i++){
//     const row = seatingChart[i];
// console.log(`ROW #${i+1}`)

//     for (let j= 0; j<row.length; j++) {
//     console.log(row[j])
//     }
// }

// // console.log(seatingChart[i])

// H2 WHILE LOOP
        
// let num = 0;
// while (num<10){
//     console.log(num);
//     num++;
// }

// Same as above
// for (let i=1; i<=10; i++)

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret cone.");
// while (guess !== SECRET){
//     guess = prompt("enter the secret code")
// }
// console.log("SUCCESS")

// H2 BREAK KEYWORD

// let input = prompt("Hey write something")
// while(true){
//         input=prompt(input);
//         if (input.toLowerCase() === "stop copying me")
//             break;
        
// }
// console.log("You Win")

// for (let i=0; i<1000; i++){

//     console.log(i);
//     if (i===100 )break;
// }


// H2 GUESSING GAME

// let maximum = parseInt(prompt("Enter Max Number"));

//     while(!maximum){
//     maximum = parseInt(prompt("Enter Valid Number"));
// }
// const targeNum = Math.floor(Math.random()*maximum) +1;


// let guess = parseInt(prompt ("Enter your first guess"));
// let attempts = 1;

//     while (parseInt(guess) !== targeNum){
//         if(guess === 'q') break;
//         attempts ++;
//         if(guess >targeNum){
//             guess = prompt("To High Guess Again");
//         } 
//         else{
//             guess = prompt("To Low Guess Again")
//         }
//     }

//     if(guess ==='q'){
//         console.log("Quitter")
//     }
//     else{
//     console.log(` You Got it! It toook you ${attempts} guesses `)
//     }


// H2 FOR OF LOOP


// const animals = [
//     "Aardvark",
//     "Aardwolf",
//     "African Elephant",
//     "African Tree Pangolin",
//     "Alligator",
//     "Alpaca",
//     "Anteater",
//     "Antelope",
//     "Ape(s)",
//     "Arabian Horse",
  
// ]



// for (let i=0; i< animals.length; i++){
//     console.log(i,animals[i])
// }

// sub is created name for the array

// for (let sub of animals){
//     console.log(sub)
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let row of seatingChart) {
//     for(letstudent of row){
//         console.log(student)
//     }
// }


// prints charichter per line 

// for (let char of "hello world") {
//     console.log(char)
// }

// Q1 PRACTICE

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (let i of numbers) {
//     console.log(i*i)
// }

// increment in 2s

// for (let i=1; i<=20; i+= 2){
    
//     console.log(i);
// }

const testScores = {
keenan: 80,
damon: 67,
kim: 89,
shawn: 91,
marlon: 72,
dwayne: 77,
nadia: 83,
elvira: 97,
diedre: 81,
vonnie: 60,
}

// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }



// keenan scored 80 
// jsloops.js:293 damon scored 67
// jsloops.js:293 kim scored 89
// jsloops.js:293 shawn scored 91
// jsloops.js:293 marlon scored 72
// jsloops.js:293 dwayne scored 77
// jsloops.js:293 nadia scored 83
// jsloops.js:293 elvira scored 97
// jsloops.js:293 diedre scored 81
// jsloops.js:293 vonnie scored 60

// Object.values(testScores)
// (10) [80, 67, 89, 91, 72, 77, 83, 97, 81, 60]


// Object.keys(testScores)
// (10) ['keenan', 'damon', 'kim', 'shawn', 'marlon', 'dwayne', 'nadia', 'elvira', 'diedre', 'vonnie']


// Object.entries(testScores)
// (10) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['keenan', 80]
// 1: (2) ['damon', 67]
// 2: (2) ['kim', 89]
// 3: (2) ['shawn', 91]
// 4: (2) ['marlon', 72]
// 5: (2) ['dwayne', 77]
// 6: (2) ['nadia', 83]
// 7: (2) ['elvira', 97]
// 8: (2) ['diedre', 81]
// 9: (2) ['vonnie', 60]
// length: 10
// [[Prototype]]: Array(0)

// for (let score of Object.values(testScores)){
//     console.log(score);
// }

// 80
// jsloops.js:297 67
// jsloops.js:297 89
// jsloops.js:297 91
// jsloops.js:297 72
// jsloops.js:297 77
// jsloops.js:297 83
// jsloops.js:297 97
// jsloops.js:297 81
// jsloops.js:297 60

// let total = 0;

// let score = Object.values(testScores);
// for (let score of scores){
//     total += score;
// }
// console.log(total/score.length)