
const button = document.getElementById('button');
console.log(button);

const buttons = document.getElementsByClassName('myButton');
console.log(buttons);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

button.innerHTML = '<b>Hello!</b>';
// button.style.background = 'blue';
// button.style.color = 'red';

function alertStopPrinting(){
    // alert('Stop clicking');
}
document.addEventListener('click', alertStopPrinting);

button.addEventListener('click', (e) => {
    // console.log(e)
    e.stopPropagation();
    // button.innerHTML = '<u>You clicked on me!</u>';
    e.target.innerHTML = '<u>You clicked on me!</u>';
    alert('Button clicking!');
});

const body = document.getElementById('body');

body.addEventListener('click', () => {
    // alert('No Body clicked me!');
});

const addButton = document.getElementById('add');
const myList = document.getElementById('myList');

addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    const myList = document.getElementById('myList');
    myList.appendChild(newItem);
});

// removeChild()
const removeButton = document.getElementById('remove')

removeButton.addEventListener('click', () =>{
    const myList = document.getElementById('myList');
    if (myList.lastChild){
        myList.removeChild(myList.lastChild);
    }
});
