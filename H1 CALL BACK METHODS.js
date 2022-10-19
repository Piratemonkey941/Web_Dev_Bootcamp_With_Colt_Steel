// // H1 CALL BACK METHODS

// // H2 forEach

// const nums=[9,8,7,6,5,4,3,2,1];

// nums.forEach(function(n) {
//     console.log(n*n)
// });

// // prints 81,64,49,36,25,16,9,4,1

// nums.forEach(function (el){
//     if(el % 2 === 0){
//     console.log(el)
//     //prints 8.6.4.2
//     }
// })

// const nums=[9,8,7,6,5,4,3,2,1];


// // comonn format
// nums.forEach(function (el){
    
//     console.log(el)
// }

// nums.forEach(function (el){
//     if(el % 2 === 0)
//     console.log(el)
// }

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// // 'alien -90/100'

// movies.forEach(function (movie){
// console.log(`${movie.title} - ${movie.score}/100`)
// })

// H2 Map Method

// const texts = ['rofl', 'lol', 'omg', 'ttyl', ];
// const caps = texts.map(function (text){
//     return text.toLowerCase();
// })

// texts
// (4) ['rofl', 'lol', 'omg', 'ttyl']

// caps wouldnt return capitalized 
// (4) ['rofl', 'lol', 'omg', 'ttyl']

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
//     13, 14, 15, 16, 17, 18, 19, 20];

//     const doubles = numbers.map(function(num){
//         return num * 2;
//     })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// titles
// (4) ['AMADEUS', 'STAND BY ME', 'PARASITE', 'ALIEN']

// H3 Map Practice

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, 
// {first: 'Harry', last: 'Potter'}, 
// {first: 'Hermione', last: 'Granger'}, 
// {first: 'Ron', last: 'Weasley'}, 
// {first: 'Rubeus', last: 'Hagrid'}, 
// {first: 'Minerva', last: 'McGonagall'}, 
// {first: 'Severus', last: 'Snape'}];

// const firstNames = fullNames.map(function(person){
//     return person.first;
// });

// H2 Arrow Funjctions
// more compact  then reg function 
// used to create function expressions

// const square = (x) => {
//     return x*x;
// }

// const sum = (x,y) +> { 
//     return x=y;
// }

// const add = function(x,y) {
//     return x+y;
// }

// const add = (x,y) => {
//     return x+y;
// }

// const square = (x) => {
//     return x*x;
// }

// // square(5)
// // 25

// const rollDie = ()  => {
//     return Math.floor(Math.random()*6)+1
// }

// // random roll die with arrows

// const greet = (name) => {
// return `Hey ${name}!`;
// }


// H2 Arrow Funjctions implicite returns
//use Perenthisise instead of curly brackets to remove return function
// can only return one value

// const rollDie = ()  => {
//     return Math.floor(Math.random()*6)+1
// }

// const rollDie = ()  => (
//      Math.floor(Math.random()*6)+1
// )

// const add = (a,b) => a+b


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score/10}`
// })

// newMovies
// (4) ['Amadeus - 9.9', 'Stand By Me - 8.5', 'Parasite - 9.5', 'Alien - 9']

// const newMovies = movies.map(movie => (
//      `${movie.title} - ${movie.score/10}`
// )) 


// const newMovies = movies.map(movie => `${movie.title} - ${movie.score/10}`) 
// newMovies

// (4) ['Amadeus - 9.9', 'Stand By Me - 8.5', 'Parasite - 9.5', 'Alien - 9']

// H2 setTimeout & setInterval

// setTimeout(() => {
//     console.log("Hello!")
// }, 3000);

// console.log("Hello!")
// setTimeout(() => {
//     console.log("Any one there?")
// }, 3000);

// console.log("Goodbye")

//  H3 setInterval

// const ID = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// clearInterval(ID)


// H2 Filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 
//     9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//     numbers.filter(n=> {
//         return n < 10
//     })

//     numbers.filter(n=> {
//         return n < 10
//     })
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// // const goodMovies = movies.filter(movie => {
// //     return movie.score > 80
// // })

// const goodMovies = movies.filter(m => m.score > 80)

// const goodTitle = goodMovies.map(m => m.title)

// movies
//     .filter(m => m.score >80)
//     .map(m => m.title);

// const badMovies = movies.filter(m => m.score < 70 )
// const recentMovies = movies.filter(m => m.year > 2000)

// const validUserNames = (strArr) => {
//     const filterArr = strArr.filter(names => {
//         return names.length < 10
//     });
//     return filterArr;
// }

// H2 Some/every
// boolean methods 
// SOME returns true if any of the elements pass the test
// EVERY returns false if any fail  


// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// exams.every(score => score >= 75)

// true

// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

// exams.every(score => score >= 75)

// false // of there is a num below 75

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// exams.some (score => score >= 75)

// true

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2010
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// movies.some(movie => movie.year > 2015)

// true

// const num = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// // exams.every(score => score >= 75)

// const allEvens = arr => {

// let newArray = arr.every(num => num % 2 === 0);
//     return newArray
// };

// H2 Reduce 
// execure a reducer function on each element of an Array,
//  resulting in a single value

//  sci exp that reduces variable to a single product

//  [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator = currentValue
//  })

//  const prices = [3, 5, 7, 9, 11];

 //  let total = 0;
//  for(let price of prices) {
//     total += price
//  }

//  console.log(total)

// with reduce

//  const total = prices.reduce((total, price) => {
//     return total + price
//  })
//    }
//     return min;
// })


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2010
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     if(currMovie.score > bestMovie.score){
//         return currMovie;
//     }
//     return bestMovie;
// })


// const minPrice = prices.reduce((min, price) => {
//     if (price < min){
//         return price;
 
// highestRated
// {title: 'Amadeus', score: 99, year: 1984}

// const odds = [3, 5, 7, 9, 11];
// odds.reduce((sum, num) => sum+num, 100)


// H2 Arrow Function and This


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
    
//     fullname: function() {
//         return `${this.firstName} ${this.lastName}`
//     }


// }

// viggo mortinson

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
    
//     fullname: () => {
//         return `${this.firstName} ${this.lastName}`
//     }


// }

// // Undefined undefined
// //window.obj error

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
    
//     fullname: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutname: function(){
//         setTimeout(function (){
            
//         console.log(this.fullName()) // causing window error
//         },3000)
//     }

// }

// person.shoutname()
// undefined
// H1 CALL BACK METHODS.js:536 Uncaught TypeError: this.fullName is not a function
//     at H1 CALL BACK METHODS.js:536:26

    const person = {
        firstName: 'Viggo',
        lastName: 'Mortensen',
        
        fullname: function() {
            return `${this.firstName} ${this.lastName}`
        },
        shoutname: function(){
            setTimeout(() => {

                console.log(this); 
                console.log(this.fullName()) 

            },3000)
        }
    
    }