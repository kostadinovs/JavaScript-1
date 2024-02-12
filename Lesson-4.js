const numbers = '123 456';
console.log(numbers);
const strLenght = numbers.length;
console.log(strLenght);
const numbersReversed = '654 321';
numbers + numbersReversed;
console.log(numbers + numbersReversed)
console.log(numbersReversed + numbers)

console.log(numbers.concat(numbersReversed))
console.log(numbersReversed.concat(numbers))


console.log(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[3])
console.log(numbers.charAt(1))
console.log(numbers.at(1))
console.log(numbers.at(-1))
console.log(numbers[numbers.length -1])

console.log(numbers)
console.log(numbers.slice(2,5))
console.log(numbers.substring(2,5))
console.log(numbers.substr(2,4)) // zema 4 chars od toj broj 
console.log(numbers.slice(-4, -2))
console.log(numbers.substring(-4, -2))

console.log(numbers.slice(2, -2))
console.log(numbers.slice(2, numbers.length - 1))
console.log(numbers.slice(2, 5))
console.log(numbers.slice(2, 7-2))

numbers
array = ['1', '2', '3',' ', '4', '5','6'];
console.log(array);
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

const numberArray = numbers.split('');
console.log(numbers.split(' '));
console.log(numbers.split('3'));
console.log(numbers.split('3 '));

const excellRow = 'Ford,red,1500';
const parsedRow = excellRow.split(',');
console.log(parsedRow)

const csv = parsedRow.join(',')
console.log(csv);

const x = parsedRow.join('|x|');
console.log(x)

/*
function myJoin(joinString) {
    let y = '';
    for (let i = 0; i < this.length - 1; i++) {
        y += this[i] + joinString;
    }
    y += this[this.length - 1]
    return y;
};
parsedRow.myJoin = myJoin;
console.log(parsedRow.myJoin(','));
*/
// Напиши функција која прима низа и search параметар, 
// function findIndex(array, search)
// треба да го врати индексот на првата појава на search параметарот
const array = ['Hello', 'World', 'Bord', 'Skate'];
const search = 'World';
// findIndex should return 1
function findIndex(array, search) {
    // @TODO: return index of element that is === to search
    for (i in array){
        if(search === array[i]){
            return i;
        }
    }
};
console.log(findIndex(array, search))

const peopleArray = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Alex", lastName: "Johnson", age: 22 },
    { firstName: "Emily", lastName: "Williams", age: 28 },
    { firstName: "David", lastName: "Brown", age: 35 },
    { firstName: "Emma", lastName: "Jones", age: 27 },
    { firstName: "Michael", lastName: "Davis", age: 32 },
    { firstName: "Sophia", lastName: "Miller", age: 29 },
    { firstName: "Ryan", lastName: "Anderson", age: 26 },
    { firstName: "Olivia", lastName: "Moore", age: 31 },
    { firstName: "Matthew", lastName: "Taylor", age: 33 },
    { firstName: "Ava", lastName: "White", age: 24 },
    { firstName: "Daniel", lastName: "Wilson", age: 34 },
    { firstName: "Grace", lastName: "Harris", age: 23 },
    { firstName: "Christopher", lastName: "Clark", age: 37 },
    { firstName: "Ella", lastName: "Thomas", age: 28 },
    { firstName: "William", lastName: "Walker", age: 30 },
    { firstName: "Chloe", lastName: "Martin", age: 31 },
    { firstName: "Liam", lastName: "Hall", age: 29 },
    { firstName: "Mia", lastName: "Adams", age: 26 },
  ];

function avarageAge(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].age)
        sum += array[i].age;
    }
    return sum / array.length;
}
console.log(avarageAge(peopleArray));
