let notifications = [
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
notifications
// get the numer of seen and unseen in this form
//{seen: 10, unseen:9}
const result = notifications.reduce((acc, val) =>{
    if (val.seen){
        acc.seen += 1;
    }else{
        acc.unseen +=1;
    }
    return acc;
}, {seen: 0, unseen: 0});
console.log(result);

//Equivalent with for lopp
let res = {seen: 0, unseen: 0};
for (let val of notifications){
    if(val.seen){
        res.seen++;
    }
    else{
        res.unseen++;
    }
}
console.log(res)

let countSeen = 0;
let cousnUnseen = 0;
for (let val of notifications){
    if(val.seen){
        countSeen++;
    }
    else{
        cousnUnseen++;
    }
}
console.log(countSeen)
console.log(cousnUnseen)

const resultObj = {
    seen: countSeen,
    unseen: cousnUnseen,
};
let x = countSeen;
console.log(x);
console.log(countSeen);
x = '22';
console.log(x)
console.log(resultObj);

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Bobby', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'Dory', grade: 51 },
    { name: 'David', grade: 95 },
    { name: 'Chad', grade: 72 },
    { name: 'Mary', grade: 42 },
    { name: 'Alberto', grade: 85 },
    { name: 'Jane', grade: 32 },
    { name: 'Magdalene', grade: 42 },
    { name: 'Dory', grade: 51 },
  ];
  // count all student based on the first letter of their name 
  //{'A': 2, 'B': 3, 'C': 2, 'D': 3
  const count = students.reduce((acc, student) =>{
    const firstLetter = student.name[0];
    if(acc[firstLetter] === undefined){
        acc[firstLetter] = 0;
    }
    acc[firstLetter]++;
    return acc;
}, {})
console.log(count)

///////////////////////////////////////

let count1 = {};
for (student of students){
    const firstLetter = student.name.charAt(0);
    if (count1[firstLetter] === undefined){
        count1[firstLetter] = 0;
    }
    count1[firstLetter]++;
}
console.log(count1);
/*
let count = {};
for (let student of students) {
    let firstLetter = student.name.charAt(0);
    console.log(count[firstLetter])
    if (count[firstLetter]) {
        count[firstLetter]++;
    } else {
        count[firstLetter] = 1;
    }
}
console.log(count);
*/

// MDN Web Docs