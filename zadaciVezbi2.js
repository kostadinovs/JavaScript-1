/*
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(numberOfChildren, partnersName, geolocation, jobTitle){
    const fortune = `You will be a ${jobTitle} in ${geolocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
    return fortune;
}

console.log(tellFortune(3 , 'Rihana', 'Sweden', 'Computer Enginer'));
console.log(tellFortune(2 , 'Jovica', 'Macedonia', 'Enginer'));
console.log(tellFortune(1 , 'Stole', 'England', 'Football player'));

/*
The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
*/

function calculateDogAge(puppyAge){
    const convertPuppyAge = `Your doggie is ${puppyAge * 7} years old in dog years!`
    return convertPuppyAge;
}
console.log(calculateDogAge(5));
console.log(calculateDogAge(10));
console.log(calculateDogAge(18));

/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
*/

function calculateSupply (age, amountPerDay){
    const maxAge = 100;
    const totalNeeded = (maxAge - age) * (amountPerDay * 365)
    const amount = `You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}`;
    return amount;
}
console.log(calculateSupply(30,1));
console.log(calculateSupply(50,1));
console.log(calculateSupply(80,1));

/*
2. Write a JavaScript function which returns n rows by n columns of stars ('*')
*/
const n =3;
let rows = [];
for (let i = 0; i < n; i++) {
    rows.push([])
    for (let j = 0; j < n; j++) {
        rows[i].push(`${i}${j}`)
        console.log(`i: ${i} - j:${j}`);
    }
}
rows

for (let i = 0; i < n; i++) {
    console.log(rows[i]);
}
console.log(rows[0])
console.log(rows[1])
console.log(rows[2])
//00 01 02
//10 11 12
//20 21 22

/*
1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223
*/

function reversesNumber(number){
    const numberAsString = `${number}`
    let result = ''
    for (let i = numberAsString.length-1; i >=0; i--) {
        console.log(i);
        console.log(numberAsString[i]);
        result += numberAsString[i];
    }
    return parseInt(result)
}

function reverseNumber2(number){
    const numberArray = `${number}`.split('');
    numberArray
    return +numberArray.reverse().join('');
}

const reversedNumber = reversesNumber(32243)
console.log(reversedNumber);

const reversedNumber2 = reverseNumber2(32243)
console.log(reversedNumber);