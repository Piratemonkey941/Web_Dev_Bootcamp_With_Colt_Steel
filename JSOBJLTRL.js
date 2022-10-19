objects

key and value

const fitBitData = {
    totalSteps          :308727
    totalMiles          :211.7
    aveCalBurn          :5755
    workoutsThisWeek    :'5 of 7'
    avgGoodSleep        :'2:13'
};

how to retrieve 

const person =
 {
                firstName: 'Mick', 
                lastName: 'Jagger'
};
undefined

person
{firstName: 'Mick', lastName: 'Jagger'}

const kitchenSink = {
    favNum : 1231234,
    isFunny : true,
    colors : ['red','orange']
}

const product = {
    name : "Gummy Bears", 
    inStock : true, 
    price : 1.99,
    flavors : ['grape', 'apple', 'cherry']

};

how to retrieve 
use square brackets or period

person

{firstName: 'Mick', lastName: 'Jagger'}
person ['firstName']
'Mick'
person ['lastName']
'Jagger'

person.firstName
'Mick'
person.lastName
'Jagger'

year
{1999: 'Good', 2020: 'Bad'}

year['1999']
'Good'
year['2020']
'Bad'

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

restaurant ['address', 'city', 'state', 'zipcode']

const fullAddress = '${restaurant.address}, ${restaurant.city},
 ${restaurant.state}, ${restaurant.zipcode}';



 const midterms = {danielle: 96, thomas: 78}
undefined
midterms
{danielle: 96, thomas: 78}
midterms.thomas = 82;
82
midterms
{danielle: 96, thomas: 82}

midterms.ezra  // added in 
undefined
midterms.ezra = 89
89
midterms
{danielle: 96, thomas: 82, ezra: 89}


const comments = [
    {username: 'Tammy', text: 'LMAO', votes:9},
    {username: 'Johnny', text: 'Bro', votes:3},
    {username: 'Brad', text: 'Wow', votes:4},
]

undefined
comments[1]
{username: 'Johnny', text: 'Bro', votes: 3}
comments[1].text
'Bro'