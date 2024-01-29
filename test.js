const test = 3
test



if (test === 2){
    console.log('Test is 2')
}
if (test === 3){
    console.log('Test is 3')
}

for (let i = 100; i > 0; i-=10){
    console.log(i)
}

for (let i = 1; i <= 10; i++){
    console.log(i)
}

let array = [];
for(let i = 0; i<=100; i+=2){
    array.push(i);
    console.log(array)
}

let array1= [];
for(let i = 0; i<=100; i++ ){
    if(i % 7 == 0){
        array1.push(i)
       console.log(i)
       console.log(array1)
    }
    
}
const array2 = [2 , 4, 50 , 342, 432]
let broj = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] > broj){
        broj = array2[i];
    }
}
console.log(broj)

array2
const sortiranaNiza = array2.sort();
sortiranaNiza

//Write JS code to count all the occurences of the number 1 in an array
//Example: [1, 2, 3, 5, 1, 2, 4, 6, 2, 1] should return 3 (there are 3 occurences of the number 1)

const array3 = [1, 2, 3, 5, 1, 2, 4, 6, 2, 1];
let number =1
let counter =0;
for (let i = 0; i < array3.length; i++) {
    if(array3[i] === number){
        counter++;
    }
}
counter

/*
3. Write JS code to print Even numbers in given array (for cycle + %)
*/
const niza = [1, 6, 7, 9, 8, 10, 15, 16, 250];
const nizaParni = [];
for (let i = 0; i < niza.length; i++) {
    if(niza[i] % 2 === 0){
        nizaParni.push(niza[i]);
        console.log(niza[i]);
    } 
}
console.log(nizaParni);

/*
4. Write JS code to delete all occurrence of element in given array
*/

niza1 = [1, 2, 3, 5, 1, 2, 4, 6, 2, 1];
const numberDelete = 2;
for (let i = 0; i < niza1.length; i++) {
    if(niza1[i] === numberDelete){
        niza1.splice(i, 1);
    }
}
niza1


/*
5. Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.
 Example: halve([1, 2, 3, 4]) should return [1, 2].
*/

function halve(niza2){
    const half = [];
    for (let i = 0; i < niza2.length/2; i++) {
        half.push(niza2[i]);
    }
    return half
}
const niza2 = [1, 2, 3, 4, 5, 6, 7];
const niza2Half = halve(niza2);

niza2Half

// zadaca so oceni

const marks = 50;
if( marks > 90 && marks <=100){
    console.log('S grade')
}else if(marks > 80 && marks <= 90){
    console.log('A grade')
}else if(marks > 70 && marks <= 80){
    console.log('B grade')
}else if(marks > 60 && marks <= 70){
    console.log('C grade')
}else if(marks > 50 && marks <= 60){
    console.log('D grade')
}else if(marks > 40 && marks <= 50){
    console.log('E grade')
}else if(marks > 0 && marks <=40){
    console.log('Student has failed')
}else{
    console.log('invalid marks')
}


const marksArray =[55, 40, 80, 89, 96, 77, 100, 111];
let grade = [];
let Sgrade=0, Agrade=0, Bgrade=0, Cgrade = 0;
for (let i = 0; i < marksArray.length; i++) {
    if( marksArray[i] > 90 && marksArray[i] <=100){
        Sgrade++;
        grade.push('S grade')
    }else if(marksArray[i] > 80 && marksArray[i] <= 90){
        Agrade++;
        grade.push('A grade')
    }else if(marksArray[i] > 70 && marksArray[i] <= 80){
        Bgrade++;
        grade.push('B grade')
    }else if(marksArray[i] > 60 && marksArray[i] <= 70){
        Cgrade++;
        grade.push('C grade')
    }else if(marksArray[i] > 50 && marksArray[i] <= 60){
        grade.push('D grade')
    }else if(marksArray[i] > 40 && marksArray[i] <= 50){
        grade.push('E grade')
    }else if(marksArray[i] > 0 && marksArray[i] <=40){
        grade.push('Student has failed')
    }else{
        grade.push('invalid marks')
    }
}

console.log(grade)

console.log('S grade = ',Sgrade, 'A grade = ', Agrade )