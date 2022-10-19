

// // JSON STRING
// const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`

// ------------------------------
// H1 FETCH

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESOLVED", res);                          // request?
//     res.json().then(data => console.log("JSON DONE", data)) // pulling data 
// })

// .then(data => {
//     console.log(data);
// })

// .catch (e => {
//     console.log("ERROR", e)
// });
// --------------------------
// varient

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESOLVED", res);                         
//     return res.json(); 
// })

// .then(data => {
//     console.log(data);
// })

// .catch (e => {
//     console.log("ERROR", e)
// });

// --------------------------

// requesting multiple

// fetch("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("RESOLVED", res);                         
//     return res.json(); 
// })

// .then(data => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
// })


// .then(res => {
//     console.log("second request resolved")
//     return res.json();
// })
// .then(data => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
// })
// .catch (e => {
//     console.log("ERROR", e)
// });


// --------------------------

//async function fetch  cleaner
//dont forget to wrap in try catch 


// const loadStarWarsPeople = async () => {
//     try{
//     const res = await fetch("https://swapi.dev/api/people/1/")
//     const data = await res.json();
//     console.log(data);
    
//     const res2 = await fetch("https://swapi.dev/api/people/2/")
//     const data2 = await res2.json();
//     console.log(data2);
//     } catch (e){
//         console.log("error", e)
//     }
// };

// loadStarWarsPeople();

// ---------------------------------------

// H1 AXIOS

// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//         console.log("response", res);
// })

// .catch ((e)=> {
//     console.log("error", e)
// });

// const getStarWarsPerson = async (id) => {
//     try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     } catch (e) {
//         console.log("ERROR")
//     }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

// --------------------------------------

// H1 Setting Headers With Axios


// const jokes = document.querySelector("#jokes");
// const button = document.querySelector('button');



// const addNewJoke = async () => {
//     const jokeText = await getDadJoke()
//     console.log(jokeText)
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }
// const getDadJoke = async () => {
//     try {
//     const config = { headers: { Accept: "application/json" } }
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     // console.log(res.data.joke)
//     return res.data.joke;
//     } catch (e){
//         return "No Jokes Available"
//     }
// }

// button.addEventListener('click', addNewJoke)


const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: { q: searchTerm} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}
