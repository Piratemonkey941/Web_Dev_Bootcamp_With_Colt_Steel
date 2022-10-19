// H1 EVENTS

// H2 Events

// clicks 

const btn1 = document.querySelector('#v2');

btn1.onclick = function(){
    console.log("You Clicked Me")
    console.log("I Hope You Worked")
}

//mouse over 
function scream() {
    console.log("AHHH");
    console.log("STOP TOUCHING ME!")
}

// add event listener 

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function(){
//     alert("CLICKED");
// })


function twist(){
    console.log("twist")
}
function shout(){
    console.log("shout")
}

const tasButton = document.querySelector('#tas');

// does not allow multiple
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// allows multiple
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

// ----------------------------------------------------------


// const btn = document.querySelector('#hello');
// btn.addEventListener('click', function(){
//     alert("CLICKED");
// })



// function hello() {
//     console.log("hello");   
// }


// const helloBtn = document.querySelector('#hello');


// helloBtn.addEventListener('click', hello)




// function goodbye() {
//     console.log("goodbye");   
// }


// const gdbyBtn = document.querySelector('#goodbye');


// helloBtn.addEventListener('click', goodbye)


// const gdbyBtn = document.querySelector('#goodbye');

// gdbyBtn.onclick = function(){
//     console.log("goodbye")
    
// }