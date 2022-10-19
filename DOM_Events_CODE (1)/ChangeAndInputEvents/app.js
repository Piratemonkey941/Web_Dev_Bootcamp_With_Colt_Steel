// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// // })

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value;
// })

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');
// // input.addEventListener('change', function (e){
// //     console.log("blerg")

// input.addEventListener('input', function (e){
//    h1.innerText = input.value;
   
// })







let header = document.querySelector('h1');
let input = document.querySelector('input');
 
input.addEventListener('input', () => {
   header.innerHTML =`Welcome, ${input.value}`;
   if (input.value === ""){
       header.innerHTML = 'Enter Your Username';
    }
});