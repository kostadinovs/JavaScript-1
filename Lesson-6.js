/*
4. Write a function that takes a string and returns the spongebob mocking meme output 
    (the first and every second letter after that is uppercased, 
        the others are lowercased, spaces are ignored, and apostrophees are removed )
    input: I am a surgeion!
    output: I aM a SuRgEiOn
    resource: https://i.imgur.com/GuVVspe.jpg
*/
function spongebob(txt){
    
    let result = txt[0].toUpperCase()
    let count = 0;
    for (let i = 1; i < txt.length; i++) {
        if(txt[i] !== ' ' && txt[i] !=='!'){
            count++;
        }
        //if( txt[i] !== '!'){
            if(['!', '"'].includes(txt[i])){
                continue;
            }
            if(count % 2 === 0){
                result += txt[i].toUpperCase()
            }else {
                result += txt[i].toLowerCase()
            }
    }
    return result
}
console.log(spongebob('i am a surgeion!'))

// Functional programming 

const numbers = [1,2,3,4,5];

const square = (x) => x*x;

const squaredNumbers = numbers.map(square).map(x => x/2);

console.log(numbers.map(square));
console.log(squaredNumbers);

function myMap(array, mapFunction){
    let result = [];
    for (let item of array){
        result.push(mapFunction(item));
    }
    return result;
}
const r = myMap(numbers, square);
console.log(r)
/*callback*/

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 20 },
    { name: 'Emily', age: 14 },
    { name: 'Michael', age: 27 },
];
//const addAdulField = (person) =>{
//    if(person.age >18){
//        person.adult = true;
//    }else{
//        person.adult = false;
//    }
//    return person
//}

const addAdulField = (person) =>{
    person.adult = person.age < 18;
    return person;
}
const transformedPeople = people.map(addAdulField)
console.log(transformedPeople)

function sum(arr){
    let sum = 0;
    for (const val of arr){
        sum +=val;
    }
    return sum;
}
const res = sum([1, 2, 3, 4, 5])
console.log(res)

const res2 = [1, 2, 3, 4, 5].reduce((a, b) => a+b)
console.log(res2)

function sumAlt(arr){
    const reducer = (suma, val) => suma + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
}

const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
]; 

const total = lineItems.reduce((suma, item) =>suma + item.total, 0);
total
const totalAlt = lineItems.map(item => item.total).reduce((suma, val) => suma + val, 0);
totalAlt

const rawData = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3},
    { description: 'Cheese', quantity: 0.5, price: 5 },
    { description: 'Butter', quantity: 2, price: 6 }
];

const dataWithTotal = rawData.map(item =>{
    item.total = item.quantity * item.price;
    return item;
})

dataWithTotal


people;

const totalAge = people.reduce((suma, person) => suma + person.age, 0);
console.log(totalAge / people.length)

//sort()
const array = [1,4,3,5,2,6];
console.log(array.sort((a, b) => b-a ))
console.log(array.sort((a, b) => a-b ))

const temp = people.sort((a,b) => a.age - b.age)
console.log(temp)


//sort by name
const sortByName = people.sort((a, b) =>{
    if(a.name > b.anme){
        return 1;
    }
    if(a.name < b.name){
        return -1;
    }
    return 0;
});
console.log(sortByName)

const personNameBob = people.find ((person) => person.name === 'Bob')
personNameBob

people
people[1].age =18;
people
const allAdulets = people.every(person => person.age >=18);
console.log(allAdulets);


const notifications = [
    { message: "Notification 1", seen: true },
    { message: "Notification 2", seen: false },
    { message: "Notification 3", seen: false },
    { message: "Notification 4", seen: true },
    { message: "Notification 5", seen: true },
    { message: "Notification 6", seen: false },
    { message: "Notification 7", seen: false },
    { message: "Notification 8", seen: true },
    { message: "Notification 9", seen: false },
    { message: "Notification 10", seen: true }
  ];
  
//notifications = notifications.map(n => {
//    n.seen = true;
//    return n
//})
notifications
console.log(notifications)

const anyNewNotifs = !notifications.every(notif => notif.seen)
console.log(anyNewNotifs);

const numberOfUnseenNotifs = notifications.filter(notif => notif.seen === false).length
console.log(numberOfUnseenNotifs)