// H1 The Call Stack 

// basic Data
// last in first out structure

// add to top, remove from top

// call stack is how JS keeps TrackEvent

// source breakpoint  



// setTimeout(()=> {
//     document.body.style.backgroundColor = 'red';

//         setTimeout(()=> {
//             document.body.style.backgroundColor = 'orange';
//             setTimeout(()=> {
//                 document.body.style.backgroundColor = 'yellow';
//                 setTimeout(()=> {
//                     document.body.style.backgroundColor = 'green';
//                     setTimeout(()=> {
//                         document.body.style.backgroundColor = 'blue';
//                         setTimeout(()=> {
//                             document.body.style.backgroundColor = 'purple';
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)              
//         }, 1000)
// }, 1000)

// const delColCh = (newColor, delay, doNext) => {
//     setTimeout (() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delColCh('red', 1000, () => {
//     delColCh('orange', 1000, () => {
//         delColCh('yellow', 1000, () => {
//             delColCh('green', 1000, () => {
//                 delColCh('teal', 1000, () => {
//                     delColCh('blue', 1000, () => {
//                         delColCh('purple', 1000, () => {
//                         })
//                     })
//                 })
//             })  
//         })
//     })
// });

const delColCh = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delColCh('red', 1000)
// .then(() => delColCh('orange', 1000))
// .then(() => delColCh('yellow', 1000))
// .then(() => delColCh('green', 1000))
// .then(() => delColCh('teal', 1000))
// .then(() => delColCh('blue', 1000))
// .then(() => delColCh('purple', 1000))
// .then(() => delColCh('magenta', 1000))

async function rainbow(){
    await delColCh('red', 1000)
    await delColCh('orange', 1000)
    await delColCh('yellow', 1000)
    await delColCh('green', 1000)
    await delColCh('teal', 1000)
    await delColCh('blue', 1000)
    await delColCh('pruple', 1000)
    await delColCh('magenta', 1000)
    return "All Done"
}

rainbow().then(() => console.log("End of rainbow"))

// const sing = async () => {
//     throw "Error"
//     return 'LA LA LA'
// }

// sing().then((data) => {
//     console.log("Promise resolved with:", data)
// })
// .catch(err => {
//     console.log("promise rejected")
//     console.log(err)
// })

// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Credentials'
//     if(password === 'corgifeet') return 'welcome'
//     throw "invalid Password"
// }

// login ('asdf', 'asdf ')
//     .then(msg => {
//         console.log("logged in")
//         console.log("msg")
//     })
//     .catch(err => {
//         console.log("error")
//         console.log(err)
//     })