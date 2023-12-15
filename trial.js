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