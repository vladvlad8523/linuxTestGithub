let language = 'javascript'

if (language) { //if = true
    console.log('the best language is: ', language)
}
//false reiksme: '', null, NaN, undefined, false;
console.log(Boolean(''))
console.log(Boolean('Hi'))
console.log(Boolean(' ')) // tarpas ne tuscias todel true, nes symbolis
console.log(Boolean([])) //masyvas true
console.log(Boolean({})) //objectas true
console.log(Boolean(1 + '2')) //konkotinacija
console.log(Boolean('' + 1 + '0')) //konkotinacija = string 10
console.log(Boolean('1' * '2')) //konkotinacija neveiks, nes yra *
console.log(Boolean(4 + 5 + 'px')) //bus 9 nes pirminis sk. o string antras
console.log(Boolean('' + 4 +5)) //pirminis tring result = 45