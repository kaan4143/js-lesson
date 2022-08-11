

// console.log('App js Running')


// var a = 5;
// console.log(a);

// {
//     a = 3;
//     console.log(a);
// }

// var a = 5;
// console.log(a);

/* console.log(typeof 0)
console.log(typeof 3.14)
console.log(typeof 'Hello')
console.log(typeof (8 > 10))
console.log(8 > 10)
console.log(typeof '') */

// let b = +prompt('Bir rakam giriniz')

// console.log(b, typeof b)

// console.log( typeof 'number')

// let age =3;

// console.log(age)

// console.log(myAge)

// var myAge = 40;
// var myAge1 = 40;
// var myAge2 = 40;
// var myAge3 = 40;
// var myAge4 = 40;

// console.log('Hello')

// let a = null

// console.log( typeof a)


// let x;

// do {
//     x = prompt('enter a Number : ');
// }while (isNaN(x));

// console.log(x, x*x) 

// console.log('12' === 12)

// console.log('12' * '12')


// let x = 123456789001234
// let y = 123456789001234123

// let z = 0.12345678901234567
// let zz = 0.123456789012345675678

// console.log({x})
// console.log({y},typeof y)

// console.log(z)
// console.log(zz)

// let g = 0.1+0.2
// console.log(g)
// console.log(+g.toFixed(2))

// let h = 1_000_000_000

// console.log(h)


// let i = 'This "is "a\' """""s"""""tring';
// let j = "This '''''i''s a\" string";
// let k = `This is a string`;

// console.log(i,typeof i)
// console.log(j,typeof j)
// console.log(k,typeof k)



// let userName = 'Musa  ';
// console.log(userName)

// console.log('Merhaba ', userName )

// console.log(`Merhaba ${userName}`)

// console.log(`2 + 3 = ${2 +'3'}`)

// console.log('3'- 2)

// let m = ``

// let n = ' '

// let p = 0

// console.log(Boolean(m))
// console.log(Boolean(n))
// console.log(Boolean(p))
// console.log(Boolean(3 > 5))
// console.log(Boolean(3 > 2))


// const myCar = {
//     make : 'ford',
//     model : 'Mustang',
//     year : 1965,
//     color : 'Black'
//   }

//   console.log(myCar)
  
//   myCar.color = 'green'
  
//   console.log(myCar)
  
//   //   myCar = 'ford'
  
//   myCar.sunRoof = false;
  
//   console.log(myCar)
  
//   myCar.age = function(current){
//       console.log(current - this.year)
//     }
    
// myCar.age(2010)
console.log('app js running');

/*
* 1. Write a JavaScript code to calculate multiplication and division of two numbers (input from user). : 5min
*/

// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// console.log(`${num1} x ${num2} is ${num1 * num2}, \n${num1} / ${num2} is ${num1 / num2}`);

/*
 * 2. area calculation: 7min
 * area of any triangle (given only sides) ---
 * area of rectangle (given only sides)
 * area of circle (given only radius)
 * perimeter of circle (given only radius)
 *
 * pi sayisi olarak :  Math.PI / 3.141592653589793
 */

// let side1 = +prompt('Enter first side');
// let side2 = +prompt('Enter second side');
// let side3 = +prompt('Enter third side');

// const perimeter = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(
//   perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)),
// );

// console.log(`Area of triangle is ${area}, perimeter is ${perimeter}.`);
/*
* 3. temperature convertion : 8min
* celcius to fahrenheit
* fahrenheit to celcius
*/

// let cTemp = +prompt('Enter celcius temperature');
// const cToFahr = (cTemp * 9) / 5 + 32;
// console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

// let fTemp = +prompt('Enter fahrenheit temperature');
// const fToCel = ((fTemp - 32) * 5) / 9;
// console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);

const today = new Date(cuma);
console.log(today);

console.log(today.getFullYear(2022));