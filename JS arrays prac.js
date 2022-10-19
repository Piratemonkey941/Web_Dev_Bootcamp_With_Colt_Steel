let students = [];
let colors = ['red', 'orange'.'yellow'];
let lottoNums = [19,22,56,12,41]
let stuff = [true, 68, cat, null];

// let days = ['monday', 'tuesday', 'wednesday']
colors[1] = 70 
Change
 
h2 push/pop

let barbell = []

barbell.push(45)
barbell.push(45)
barbell.push(25)
barbell.push(10)
barbell.push(2.5)


barbell.pop()  removes from end
barbell.push() adds to end

h2 shift unshift

shift removes from begining

movieLine
(5)["tom", "nancy", "pablo", "oliver", "eva",]
movieLine.shift(tom)

movieLine
(5)[ "nancy", "pablo", "oliver", "eva",]

nextPatron
"nancy"

movieLine.push ('colt')
(5)["colt", "nancy", "pablo", "oliver", "eva",]


unshift is how you add to front of Array

movieLine.push
(4)["jerry", "Deniz", "Kevin", "Carley"]

movieLine.unshift('VIP')

movieLine
(4)["VIP","jerry", "Deniz", "Kevin", "Carley"]

.unshift('')

concat combines arrays

let cats = ['blue', 'kitty']
undefined

let dogs = ['rusty', 'wyatt']
undefined

cats.concat(dogs)
(4) ['blue', 'kitty', 'rusty', 'wyatt']

dogs.concat (cats)
(4) ['rusty', 'wyatt', 'blue', 'kitty']


Includes returns true or false 

cats.includes ('blue')
true
cats.includes ('Blue')
false

indexOf shows location in array and if it is in array
will only show first one 

"blue".indexOf('b')
0
"blue".indexOf('e')
3
"blue".indexOf('0')
-1

reverse reverses an arrays

let dogs = ['rusty', 'wyatt', 'blue', 'kitty']
undefined
dogs.reverse ()
(4) ['kitty', 'blue', 'wyatt', 'rusty']


Slice cuts out a portion of an array and you can create  a new one?

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] 
undefined
colors.slice()
(7) ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.slice(3)
(4) ['green', 'blue', 'indigo', 'violet']
colors.slice(5)
(2) ['indigo', 'violet']

let coolColors = colors.slice(3)
undefined
coolColors
(4) ['green', 'blue', 'indigo', 'violet']
colors
(7) ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.slice(2,4)
(2) ['yellow', 'green']
let warColors = colors.slice(0,3)
undefined
warColors
(3) ['red', 'orange', 'yellow']
colors.slice(-2)
(2) ['indigo', 'violet']


SPLICE
Splice Can add or remove (or both) something in the middle of an array where you select 
(selector,How many to remove, 'what to add') 


colors.splice (5,1)
['indigo']

colors
(6) ['red', 'orange', 'yellow', 'green', 'blue', 'violet']


colors.splice (1,0,'red-orange')
[]

colors
(7) ['red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'violet']
colors.splice (4,0,'yellow-green', 'forestgreen')
[]

colors
(9) ['red', 'red-orange', 'orange', 'yellow', 'yellow-green', 'forestgreen', 'green', 'blue', 'violet']

colors.splice(2,2,'Deleted!')

(2) ['orange', 'yellow']
colors

(8) ['red', 'red-orange', 'Deleted!', 'yellow-green', 'forestgreen', 'green', 'blue', 'violet']


sort arrays 

let scores = ['1', '70', '100', '250', '9', '-12', '0', '34']
undefined
scores.sort()
(8) ['-12', '0', '1', '100', '250', '34', '70', '9']
warning above 

Arrays referencing 

'hi' === 'hi'
true
['hi', 'bye'] === ['hi', 'bye']
false
[1] === [1] 
false
[1] == [1] 
false
[] == [] 
false

let nums = [1,2,3]
undefined
let numsCopy = nums
undefined
nums
(3) [1, 2, 3]
numsCopy
(3) [1, 2, 3]
nums.push (4)
4
nums
(4) [1, 2, 3, 4]
numsCopy
(4) [1, 2, 3, 4]
numCopy.pop() wouldnt allow

(anonymous) @ VM3193:1
nums === numsCopy
true

Arrays + Const 

const numbers = [1,2,3]
undefined

numbers.push (4)
4

numbers
(4) [1, 2, 3, 4]

numbers = 1
VM3472:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9

(anonymous) @ VM3472:1

numbers = [1, 2, 3, 4]
VM3502:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9


    Multi-Dimentional Arrays

    const board = [['X', 'O','X'],['O', null,'X'], ['O', 'O', 'X']]
undefined

board
(3) [Array(3), Array(3), Array(3)]
0: (3) ['X', 'O', 'X']
1: (3) ['O', null, 'X']
2: (3) ['O', 'O', 'X']
length: 3
[[Prototype]]: Array(0)

board[1]
(3) ['O', null, 'X']

board[1][1]
null