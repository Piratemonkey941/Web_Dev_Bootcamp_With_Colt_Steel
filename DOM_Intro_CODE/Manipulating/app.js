// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks){
//     link.innerText = 'I AM A LINK'
// }

// -----------------------------------------------------

// H2 Inner HTML

// document.querySelector('p').innerHTML

// 'The <b>Silkie</b> (sometimes spelled <b>Silky</b>) 
// is a <a href="/wiki/List_of_chicken_breeds" title="
// List of chicken breeds">I AM A LINK</a> of <a 

// document.querySelector('h1').innerHTML = '<i>asdfl;kj</i>'
// '<i>asdfl;kj</i>'

// document.querySelector('h1').innerHTML += '<sup>asdfad</sup>'
// '<i>asdfl;kj</i><sup>asdfad</sup>'

// Practice 

// const span = document.querySelector('span');
// span.innerHTML = 'Disgusting';

// -----------------------------------------------------

// H2 ATTRIBUTES


// document.querySelector('#banner')
// <img id=​"banner" src=​"https:​/​/​images.unsplash.com/​photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt>​

// document.querySelector('#banner').id
// 'banner'

// document.querySelector('#banner').id = 'whoops'
// 'whoops' // breaks banner

// document.querySelector('#whoops').id = 'banner'
// 'banner' // fixes banner

// document.querySelector('#banner').src
// 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'

// document.querySelector('a').href
// 'file:///D:/wiki/List_of_chicken_breeds'

// document.querySelector('a').title
// 'List of chicken breeds'

// const firstLink = document.querySelector('a')
// undefined

// firstLink
// <a href=​"/​wiki/​List_of_chicken_breeds" title=​"List of chicken breeds">​I AM A LINK​</a>​

// firstLink.href
// 'file:///D:/wiki/List_of_chicken_breeds'
// f

// irstLink.getAttribute
// ƒ getAttribute() { [native code] }

// firstLink.getAttribute('href')
// '/wiki/List_of_chicken_breeds'

// document.querySelector('input')[1]
// undefined
// document.querySelector('input[type = "text"]')
// <input type=​"text">​
// const input = document.querySelector('input[type = "text"]')
// undefined
// input.type
// 'text'
// input.type = 'password'
// 'password'
// input.type = 'color'
// 'color'
// input.setAttribute('type', 'text')
// undefined

// coonst 



// -----------------------------------------------------
// H2 practice



// const img = document.querySelector('img')
// img.src = 'https://devsprouthosting.com/images/chicken.jpg';
// img.alt = 'chicken';

// -----------------------------------------------------
// H2 change style

// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.style.color = '#006c86'
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

// const h1 = document.querySelector('h1');
// undefined
// window.getComputedStyle(h1)
// CSSStyleDeclaration {0: 'accent-color', 1: 'align-content', 2: 'align-items', 3: 'align-self', 4: 'alignment-baseline', 5: 'animation-delay', 6: 'animation-direction', 7: 'animation-duration', 8: 'animation-fill-mode', 9: 'animation-iteration-count', 10: 'animation-name', 11: 'animation-play-state', 12: 'animation-timing-function', 13: 'app-region', 14: 'appearance', 15: 'backdrop-filter', 16: 'backface-visibility', 17: 'background-attachment', 18: 'background-blend-mode', 19: 'background-clip', 20: 'background-color', 21: 'background-image', 22: 'background-origin', 23: 'background-position', 24: 'background-repeat', 25: 'background-size', 26: 'baseline-shift', 27: 'block-size', 28: 'border-block-end-color', 29: 'border-block-end-style', 30: 'border-block-end-width', 31: 'border-block-start-color', 32: 'border-block-start-style', 33: 'border-block-start-width', 34: 'border-bottom-color', 35: 'border-bottom-left-radius', 36: 'border-bottom-right-radius', 37: 'border-bottom-style', 38: 'border-bottom-width', 39: 'border-collapse', 40: 'border-end-end-radius', 41: 'border-end-start-radius', 42: 'border-image-outset', 43: 'border-image-repeat', 44: 'border-image-slice', 45: 'border-image-source', 46: 'border-image-width', 47: 'border-inline-end-color', 48: 'border-inline-end-style', 49: 'border-inline-end-width', 50: 'border-inline-start-color', 51: 'border-inline-start-style', 52: 'border-inline-start-width', 53: 'border-left-color', 54: 'border-left-style', 55: 'border-left-width', 56: 'border-right-color', 57: 'border-right-style', 58: 'border-right-width', 59: 'border-start-end-radius', 60: 'border-start-start-radius', 61: 'border-top-color', 62: 'border-top-left-radius', 63: 'border-top-right-radius', 64: 'border-top-style', 65: 'border-top-width', 66: 'bottom', 67: 'box-shadow', 68: 'box-sizing', 69: 'break-after', 70: 'break-before', 71: 'break-inside', 72: 'buffered-rendering', 73: 'caption-side', 74: 'caret-color', 75: 'clear', 76: 'clip', 77: 'clip-path', 78: 'clip-rule', 79: 'color', 80: 'color-interpolation', 81: 'color-interpolation-filters', 82: 'color-rendering', 83: 'column-count', 84: 'column-gap', 85: 'column-rule-color', 86: 'column-rule-style', 87: 'column-rule-width', 88: 'column-span', 89: 'column-width', 90: 'contain-intrinsic-block-size', 91: 'contain-intrinsic-height', 92: 'contain-intrinsic-inline-size', 93: 'contain-intrinsic-size', 94: 'contain-intrinsic-width', 95: 'content', 96: 'cursor', 97: 'cx', 98: 'cy', 99: 'd', …}
// window.getComputedStyle(h1).fontSize
// '32px'
// window.getComputedStyle(h1).color
// 'rgb(128, 128, 0)'
// window.getComputedStyle(h1).fontFamily
// '"Times New Roman"'
// window.getComputedStyle(h1).marginLeft
// '0px'
// window.getComputedStyle(h1).margin
// '21.44px 0px'


// const container = document.getElementById("#container");

// container.style.alignContent = 'center';


// const image = document.querySelector('img');

// image.style.width = '150px';
// image.style.borderRadius = '50%';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// let spans = document.querySelectorAll('span')
//     for(let i in colors){
//         spans[i].style.color = colors[i];
//         console.log(i)
//     }

// const h2 = document.querySelector('h2')
// undefined

// h2.setAttribute('class')
// undefined

// h2.setAttribute('class', 'purple')
// undefined

// h2.setAttribute('class', 'border')
// undefined

// let currentClasses = h2.getAttribute('class')
// undefined

// currentClasses
// 'border'

// h2.setAttribute('class', `${currentClasses} purple`)
// undefined

// class list

// const h2 = document.querySelector('h2')
// undefined
// h2.classList
// DOMTokenList [value: '']
// h2.classList.add('purple')
// undefined
// h2.classList.add('border')
// undefined


// const h2 = document.querySelector('h2')
// undefined
// h2.classList
// DOMTokenList [value: '']
// h2.classList.add('purple')
// undefined
// h2.classList.add('border')
// undefined
// h2.classList.remove('border')
// undefined
// h2.classList.contains('border')
// false
// h2.classList.contains('purple')
// true
// h2.classList.toggle('purple')
// false
// h2.classList.toggle('purple')
// true

// const lis = document.querySelectorAll('li');
 
// for(let li of lis){
//     li.classList.toggle('highlight');
// }

// -----------------------------------------------------
// H2 traversing parent/child/sibling

// const firstBold = document.querySelector('b')
// undefined

// const paragraph = firstBold.parentElement
// undefined

// paragraph.childElementCount
// 8

// paragraph.children
// HTMLCollection(8) [b, b, a, a, a, a, a, a]

// paragraph.children[0]
// <b>​Silkie​</b>
// ​
// paragraph.children[0].parentElement

// const squareImg = document.querySelector('.square')
// undefined
// squareImg.parentElement
// <body>​…​</body>​
// squareImg.children
// HTMLCollection []
// squareImg.nextSibling
// #text
// squareImg.previousSibling
// #text

// -----------------------------------------------------
// H2 append & appendChild

// document.createElement('img')
// <img>​

// const newImg = document.createElement('img')
// undefined

// newImg
// <img>​

// console.dir(newImg)
// VM6921:1 img
// undefined


// newImg.src = https://media.istockphoto.com/photos/
// black-french-bulldog-puppy-over-a-yellow-background-
// picture-id1206229086?k=20&m=1206229086&s=170667a&w=0&h=
// IAs7UEmwQ_PDKkx9mC96-nuGcMd_7_URWJ3l_dlyezI=
// VM6960:1 Uncaught SyntaxError: Unexpected token ':'


// newImg.src = 'https://media.istockphoto.com/photos/black-
// french-bulldog-puppy-over-a-yellow-background-picture-id1
// 206229086?k=20&m=1206229086&s=170667a&w=0&h=IAs7UEmwQ_PDKk
// x9mC96-nuGcMd_7_URWJ3l_dlyezI='
// 'https://media.istockphoto.com/photos/black-french-bulldog
// -puppy-over-a-yellow-background-picture-id1206229086?k=20&m=
// 1206229086&s=170667a&w=0&h=IAs7UEmwQ_PDKkx9mC96-nuGcMd_7_URWJ3l
// _dlyezI='
    
    

//     document.body.appendChild(newImg)
// <img src=​"https:​/​/​media.istockphoto.com/​photos/​black-
// french-bulldog-puppy-over-a-yellow-background-picture-
// id1206229086?k=20&m=1206229086&s=170667a&w=0&h=IAs7UEmwQ_
// PDKkx9mC96-nuGcMd_7_URWJ3l_dlyezI=">​

// const newH3 = document.createElement('h3')
// undefined

// newH3
// <h3>​</h3>​

// newH3.innerText = 'I am New!'
// 'I am New!'


// document.body.appendChild(newH3)
// <h3>​I am New!​</h3>​

// --new method --

// const p = document.querySelector('p')
// undefined

// p.append('I am new text yaay!!')
// undefined

// const newB = document.createElement('b')
// undefined

// newB.append('Hi')
// undefined

// newB
// <b>​Hi​</b>
// ​
// p.prepend(newB)
// undefined

// const h2 = document.createElement('h2')
// undefined

// h2.append("Are adorible Chickens")
// undefined

// h2
// <h2>​Are adorible Chickens​</h2>
// ​
// const h1 = document.querySelector('h1')
// undefined

// h1.insertAdjacentElement('afterend', h2)
// <h2>​Are adorible Chickens​</h2>

// ​
// practice

// for(let i = 0; i < 100; i++){
//     const newButton = document.createElement("button");
//     newButton.innerText = "Hey";
//     const container = document.querySelector("#container");
//     container.appendChild(newButton);
// }

// -----------------------------------------------------
// H2 remove/ remove child

