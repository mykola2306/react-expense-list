// 
// Object Destructuring
// 
// const person = {
//   name: 'Nick',
//   age: 24,
//   location: {
//     city: 'Lviv',
//     temp: -5
//   }
// }


// const name = person.name;
// const age = person.age;
// const { name: firstName, age, height: tall = "unknown" } = person

// console.log(`${firstName} is ${age} and height ${tall}.`)

// const { city, temp: temperature } = person.location;
// // if(person.location.city && person.location.temp) {
// //   console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// // }
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//   title: 'ATG',
//   author: 'madman',
//   publisher: {
//     // name: 'wuxia'
//   }
// };
// const { name: publisherName = 'Self-Publised'} = book.publisher
// console.log(publisherName);


// 
// Array Destructuring
// 


const address = ['1299 South Juniper Street', 'Lviv', 'Ukraine', '83005'];

// const [street, city, country, zip] = address;
const [, city, country] = address;

console.log(`Your are in ${city} ${country}.`)


const item = ['Cofee', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)