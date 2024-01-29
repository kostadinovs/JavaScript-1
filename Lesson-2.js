function makeSandwich (meat, vegetable, bread){
    //let sandwich = meat + ' + ' + vegetable + ' + ' + bread;
    let sandwich = `${meat} + ${vegetable} + ${bread}`; // below ESC on the keyboard
    return sandwich;
}

const mySandwich = makeSandwich('lettuce ', 'wheat ');
console.log(mySandwich);
const myOtherSandwich = makeSandwich('mortadella ', 'orougula ', 'grain ');
console.log(myOtherSandwich);

const meats = [ 'ham', 'turkey', 'salami', 'mortadella', 'proscitto'];
const vegetables = ['lettuce','orgougula', 'spinach', 'carrot', 'broccoli'];
const bread = ['wheat', 'grain', 'sourdough', 'wrap', 'taco','brioch'];

let sandwiches = [];
for (let i = 0; i < meats.length; i++) {
    const sandwich = makeSandwich(meats[i], vegetables[i], bread[i]);
    sandwiches.push(sandwich);
}

console.log(sandwiches);

makeSandwich

// not so important
const otherRecipe = makeSandwich;
const specialSandwich = otherRecipe('ham', 'turkey', 'salami');
console.log(specialSandwich);

const x = makeSandwich;
console.log(x('ham', 'turkey', 'salami'));



function buildCar(){
    let carName = 'Volvo';
    return carName;
}
// we can use the same variable name in separate function
function buildMotorbike(){
    let carName = 'Harley';
    return carName;
}
// carName - carName is not defined outside of function

console.log(buildCar());
const bike =  buildMotorbike();
console.log(bike);

