// let die1 = Math.floor(math.random()*6) + 1;

// let die1 = rollDie(4);
// let die1 = rollDie(6);
// let die1 = rollDie(8);
// let die1 = rollDie(12);
// let die1 = rollDie(20);

// // sample function

// function funcName(){
//     //do something
// }
// define functions first

// function singSong(){
//     //add code here
//     console.log('DO')
//     console.log('RE')
//     console.log('MI')
//     console.log('FA')
//     console.log('SO')
//     console.log('LA')
//     console.log('TI')
  
// }

// function greet(firstName, lastName){
//     // console.log(`firstName is: ${}`)
//     console.log(`hey there, ${firstName} ${lastName}!`)
// }

// // greet('theo')
// jsfunct.js:30 hey there, theo!
// undefined

// practice
// function rant(message){
//     for(let i =0; i<3; i++){
//     console.log (message.toUpperCase())
// }}

// function repeat(str, reps){
//     let result = '';
//     for (let i =0; i<reps; i++){
//         result += str;
//     }
//     console.log (result);
// }

// muliple args exersize

// function isSnakeEyes(roll1, roll2){
//    if (roll1 === 1 && roll2 === 1){
//     console.log('Snake Eyes!');
// }else {
//     console.log ('Not Snake Eyes')
// }
// }

// return keyword

// only one value can be returned


// function add (x,y){
//     let sum = x+y;
//     return sum;
//     // console.log("end of lofg") will not run 

// }

// function add (x,y){
//     if(typeof x !== 'number' || typeof y !== 'number') 
//     {
//         return false;
//     }
//     else{
//     let sum = x+y;
//     return sum;}
//     // console.log("end of funct")  will not run
// }

// add (9,5)
// 14
// add (9,'a')
// false

// function muliply(x,y){
        
//         return x*y;
// }

// function isShortsWeather (temperature){
//     if (temperature >= 75)
//     {
//     return true;

//     } 
//     else return false;

// }

// function lastElement (arr){
//     if(arr.length === 0){
//         return null;
//     }
//     else{
//         return arr[arr.length-1]
//     }
// }
// function capitalize(str){
        
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }

// function sumArray (arr)

//     let total = 0;
//     for (let i=0; i<arr.length; i++){
//         total = total+arr[i];
//     }
//     return total;
//     //     let sum = x+y;
//     //     return sum;
const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'

}
    const returnDay = (number) =>{
        if ('number < 1 || number > 7') {
            return null;
        }
        return (days[number])
    }
