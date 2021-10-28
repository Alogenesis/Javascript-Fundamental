var name = 'Winai'
var age = 30
console.log(typeof age)
console.log(typeof 12.0)
console.log(typeof name)
console.log(typeof true)
console.log('Hello' + ' ' + 'Winai')
console.log('5+3 = '+ (5+3))
console.log('NaN = Not a number')
console.log('2+2*2='+ (2+2*2))
var result = (4+2*2/2*2*4*1-5+19)+91
console.log(result)

{
    var x = 2
    console.log('inner x =' + x)
    let y = 20
    console.log('inner y =' + y)
}
console.log('outer x =' + x)
// console.log('outer y =' + y) Error y is not defined

var a = 20
{
    var a = 100
    let b = 15
}
console.log(a)

function sayHello(username, userLastname) // Parameter ตัวแปรของฟังก์ชั่น
    {
        return 'Hello ' + username + ' ' + userLastname
    }