const person = {
    firstName: 'Michael',
    lastName: 'Jackson',
    id:5566,
    fullName:function(){
        return this.firstName + ' ' + this.lastName;
    }
};

const person2 = {
    firstName: 'Johnnie',
    lastName: 'Doey',
    id:5566,
    fullName:function(){
        return 'Mr. '+this.firstName + ' ' + this.lastName;
    }
};
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName())
console.log(person2.fullName())
const  person2FullName = person2.fullName();
person2FullName
/*
 Write a JavaScript program to list the properties of a JavaScript object.
 Sample object:
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
    };
    Sample Output: name,sclass,rollno
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student['name'])
for (const property in student) {
    console.log(`${property}`)
    console.log(`${student[property]}`)
}

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
};

for(const property in myVehicle){
    console.log(property)
    console.log(myVehicle[property])
}

const properties = Object.keys(myVehicle);
properties

const t = myVehicle['model']
t


console.log(student)
delete student.rollno
console.log(student)

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
myUpdatedVehicle

myVehicle.year
myVehicle.hasOwnProperty('year')

'color' in myVehicle

Object.keys(myVehicle)


const obj = {
    x:2,
    y:4,
    calcSum: function(){
        return this.x + this.y;
    },
    calcSubtraction: function(){
        return this.x - this.y;
    }
}

console.log(obj.calcSum());
console.log(obj.calcSubtraction());
obj.x = 5;
console.log(obj.calcSum());
console.log(obj.calcSubtraction());


/*
The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has 
properties for the title (a string), author (a string), and alreadyRead 
(a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book 
author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read 
it yet or not. If you read it, log a string like 'You already read "The Hobbit" 
by J.R.R. Tolkien', and if not, log a string like 'You still need to read 
"The Lord of the Rings" by J.R.R. Tolkien.'
*/

const books = [
    {
        title: 'The Pragmatic Programmer From Journey to Maser',
        author: 'David Thomas',
        alreadyRead: false,
    },
    {
        title: 'The Lord of the rings',
        author: 'J.R.R. Tolkien',
        alreadyRead: true,
    },
    {
        title: 'Pipi dolgiot corap',
        author: 'Astrid Lindgren',
        alreadyRead: true,
    },
];


//for (let i = 0; i < books.length; i++) {}
const print = function(){
    const bookInfo = `${this.title} by ${this.author}`;
    if(this.alreadyRead){
        return `You already read ${bookInfo}`;
    }else {
        return `You still need to read ${bookInfo}`;
    }
};
const title = 'test'
console.log(print())



for (let book of books){
    book.print = print;
    console.log(book.print())
}


for(let book of books){
    //console.log(book.title + ' by ' + book.author)
    //console.log (`${book.title} by ${book.author}` )
    const bookInfo = `${book.title} by ${book.author}`;
    if(book.alreadyRead){
        console.log(`You already read ${bookInfo}`)
    }else {
        console.log(`You still need to read ${bookInfo}`)
    }
}


const twoDigits = {
    x: 2,
    y: 3,
};

function sumDigits(a, b){
    return a + b;
}
const suma = sumDigits(twoDigits.x, twoDigits.y)
suma


function objectSum(){
    return this.x + this.y;
}
twoDigits.sum = objectSum;

twoDigits
const total = twoDigits.sum();
total

const animal = {
    speak: function(){
        return this.sound + ' ' + this.sound;
    },
};

const duck = {
    sound: 'quack',
    speak:function(){
        return this.sound + ' ' + this.sound;
    },
};
const dog = {
    sound: 'woof',
    ...animal,
};

console.log(duck.speak())
console.log(dog.speak())

/*
The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number),
 and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

const recipe = {
    title: 'Mole',
    servings: 2,
    ingredients: ['cinnamon', 'cumin' , 'cocoa']
};

console.log(recipe.title)
console.log(recipe.servings)

console.log(`Ingredients:`)

for (let i = 0; i < recipe.ingredients.length; i++){
    console.log(recipe.ingredients[i]);
}

for(let ingredient of recipe.ingredients){
    console.log(ingredient)
}


console.log(`Ingredients: ${recipe.ingredients}`)


