

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

// const tweetform = docuemt.querySelector("#tweetForm");
// const input = document.querySelector("#catName");
// const list = document.querySelector("#cats");
//     FormData.addEventListener("submit", function(e){
//         e.preventDefault();
//         console.log(input.value);
//         const catName = input.value;
//         const newLI = docuemtn.createdElement("LI");
//         newLI.innerText = catName;
        
//         list.append(newLI);

//     });

    const form = document.querySelector('form');
    const list = document.querySelector('#list');
   
        
    
    
    
    form.addEventListener('submit', function (e){
            e.preventDefault();
            const prodName = form.elements.product;
            const qty = form.elements.qty;
            addproduct(prodName.value, qty.value);
            prodName.value ='';
            qty.value ='';
            
           
    
        });

        const addProduct = (prodName,q) => {
            const newProd = document.createElement('li');
            newProd.innerText = (`${q} ${prodName}s`);
            list.appendChild(newProd);
        }

 