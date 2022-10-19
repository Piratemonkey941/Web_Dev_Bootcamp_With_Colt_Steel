// H1 Newer Java Script Functions
//-----------------------------------------------
// H2 Default Params

// function rollDie(numSides){
//     return Math.floor(Math.random() * numSides) + 1
// }

// Defaulted to roll 6

// function rollDie(numSides = 6){
//     return Math.floor(Math.random() * numSides) + 1
// }

// function greet(msg = "hey there", person){
//     console.log(`${msg}, ${person}!`)
// }

// function greet( person, msg = "hey there", punc '!'){
//     console.log(`${msg}, ${person}${punc}`)
// }

//-----------------------------------------------

// H2 Spread

// const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

// // Math.max(nums)
// // NaN


// Math.max(...nums)
// 53456

// // removes array brackets

// Math.min(...nums)
// 1

//-----------------------------------------------

// H2 Spread in arrays 

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats]

// allPets
// (3) ['Blue', 'Scout', 'Rocket']

// const allPets = [...cats, ...dogs]

// allPets
// (5) ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt']

//-----------------------------------------------

// H2 Spread in Object Literals

// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' };

// const catDog = {...feline, ...canine}
// undefined

// catDog
// {legs: 4, family: 'Caninae', isFurry: true}

// const dataFromForm = {
//     email: 'blueman@gmail.com',
//     password: 'tobias123!',
//     username: 'tfunke'
// }

// const newUser={ ...dataFromForm, id: 2345, isAdmin: false}


// {email: 'blueman@gmail.com', password: 'tobias123!', 
// username: 'tfunke', id: 2345, isAdmin: false}

//-----------------------------------------------

// H2 Rest Params

// function sum(){
//     return arguments.reduce((total, el) => total + el)
// }

// sum (3,4,5,6,7,8,9,)

// function sum(...nums){
//     console.log(nums)
// }

// function sum(...nums){  // collect the rest
//     return nums.reduce((total, el) => total + el)
// }

// sum (3,4,5,6,7,8,9,)
// 42


// function raceResults(gold, silver, bronze, ...certificate){
//     console.log(`Gold goes to: ${gold}`)
//     console.log(`Silver goes to: ${silver}`)
//     console.log(`Bronze goes to: ${bronze}`)
//     console.log(`certificates go to: ${certificate}`)
// }

// raceResults('Tammy', 'Todd', 'Bill', 'AllElse')
// newJSF.js:106 Gold goes to: Tammy
// newJSF.js:107 Silver goes to: Todd
// newJSF.js:108 Bronze goes to: Bill
// newJSF.js:109 certificates go to: AllElse
// undefined

//-----------------------------------------------

// H2 Destructuring Arrays

// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const[gold, silver, bronze ...allElse] = scores;

// gold
// 929321
// silver
// 899341

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const {email} = user;

// const {born: birthYear, died: deathYear} = user;

// const {city, state, died = 'NA'} = user2

//-----------------------------------------------

// H2 destructuring params

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user){
//     const {firstName, lastName} = user;
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName({ firstName, lastName }) {
//     return `${user.firstName} ${user.lastName}`
// }





const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


// movies.filter((movie) => movie.score >= 90)

// movies.filter(({score}) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year} is rated ${movie.score})`
// })

// (9) ['Amadeus (1984 is rated 99)', 'Sharknado (2013 is rated 35)',
//  '13 Going On 30 (2004 is rated 70)', 'Stand By Me (1986 is rated 85)',
//   'Waterworld (1995 is rated 62)', 'Jingle All The Way (1996 is rated 71)',
//    'Parasite (2019 is rated 95)', 'Notting Hill (1999 is rated 77)', 
//    'Alien (1979 is rated 90)']

   movies.map(({title, score, year}) => {
    return `${title} (${year} is rated ${score})`
})