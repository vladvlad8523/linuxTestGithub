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
