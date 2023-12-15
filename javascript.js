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



