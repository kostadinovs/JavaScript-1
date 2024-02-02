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






