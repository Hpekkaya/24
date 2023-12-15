// js dates

const myDate = new Date()
console.log("Get Full      :", myDate)
//getfullyear (yıl)
console.log("Get Full Year :", myDate.getFullYear()+1)
//getmonth 0-11 (ay)
console.log("Get Month Numb:", myDate.getMonth())
//getdate (gün)
console.log("Get Day of The Month :", myDate.getDate())
//saat dakika saniye
console.log(`Get Time (Hour, Mint. Sec) ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`)

// JS Math Functions
//Misuse of Function
const myMath = new Math()
console.log( myMath.round(4.6))

console.log("Returns  rounded to its nearest integer : ", "4.67->",
Math.round(4.67), ", 4.49->", Math.round(4.49));

console.log("Returns  up to its nearest integer      : ", "5.17->",
Math.ceil( 5.17), ", 5.87->", Math.ceil(5.87));

console.log("Returns  down to its nearest integer    : ", "5.17->",
Math.floor(5.17), ", 5.87->", Math.floor(5.87));

console.log("Returns if x is negative, null or positive  : ", "-5.17->",
Math.sign(-5.17), ", 5.87->", Math.sign(5.87));

console.log("Returns the square root                     :  ", "(8)->",
Math.sqrt(8).toFixed(2), ", (4.2 )->", (Math.sqrt(4.2)).toFixed(2));

console.log("Returns the value of x to the power of y :", "(8, 3)->",
Math.pow(8,3), ", (4.2, 4)->", (Math.pow(4.2,4)).toFixed(4));

console.log("Returns the absolute (positive) value of x :", "(-8 )->",
Math.abs(-8), ", (4.2)->", (Math.abs(4.2)).toFixed(2));

console.log("Returns the lowest value in (0, 150, 30, 20, -8, -200) ->",
Math.min(0, 150, 30, 20, -8, -200));

console.log("Returns the highest value in (0, 150, 30, 20, -8, -200) ->",
Math.max(0, 150, 30, 20, -8, -200));

// js boolean
console.log("Display the value of Boolean(10 > 9): ", Boolean(10>9))

console.log("Display the value of Boolean(10 < 9): ", Boolean(10<9))

console.log("Display the value of Boolean(\"a\"): ", Boolean("a"))

console.log("Display the value of Boolean(-1): ", Boolean(-1))

console.log("Display the value of Boolean( ): ", Boolean( ))

let z = "";
console.log("z değeri",z)
console.log(Boolean(z))

let q;
console.log("q değeri",q)
console.log(Boolean(q))

// js comparison 

let x = 8 ; //Assign 8 to x,  
console.log("Assign 8 to x ")
console.log("Display the value of the comparison (x == 10):", x == 10) 
console.log("---------")

let y = "34"
console.log("y=\"34\"  -Assign 34 (string) to y")
console.log("Display if the equal value and equal type of the comparison (y === 34):", y === 34) 

let y1 = 34
console.log("y1=34  -Assign 34 (number) to y1")
console.log("Display if the equal value and equal type of the comparison (y1 === 34):", y1 === 34) 
console.log("---------")

let z = "88"
console.log("Assign 88 to z ")
console.log("Display not equal the value of the comparison (z != 88):", z != 88) 
console.log("Display not equal the value of the comparison (z != 90):", z != 90) 
console.log("---------")

let z1 = "34"
console.log("z1=34  -Assign 34 (string) to z1")
console.log("Display if the not equal value and equal type of the comparison (z1 !== 34):", z1 !== 34) 
console.log("---------")

// let x = 8 ;
// let y = 10 ;
// console.log("x=8  -Assign 8 to x")
// console.log("y=8  -Assign 10 to y")

// console.log("The && operator returns true if both expressions are true, otherwise it returns false.")
// console.log("!(x<5) && y>12")
// console.log(!(x<5) && y>12)
// console.log("---------")
// console.log("The || returns true if one or both expressions are true, otherwise it returns false.")
// console.log("!(x<5) && y>12")
// console.log(!(x<5 || y>12))

// //ternary operator
// let age = 30
// // If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".

// let voteable  = (age<18) ? "Too young to vote" : "Old enough to vote"
// console.log(voteable )

//nullish operator ??

// let name1 = "mustafa"
// let name2; //undefined
// let name3 = null
// let name4 = 0
// let name5 = ""
// let name6 = NaN
// let text = "Missing name "
// //The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
// console.log("-------------")
// console.log(name1 ?? text)
// console.log(name2 ?? text)
// console.log(name3 ?? text)
// console.log(name4 ?? text)
// console.log(name5 ?? text)
// console.log(name6 ?? text)
// console.log("-------------")


