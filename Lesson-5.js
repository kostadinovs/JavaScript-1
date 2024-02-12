const x = 32243;
/*
function reverseNumber(number){
    let result = `${number}`;

    let niza = result.split('');
    console.log(niza);

    const ObrtnaNiza = niza.reverse();
    console.log(ObrtnaNiza)

    const final = ObrtnaNiza.join('')
    return final;
}
console.log(reverseNumber(x))
*/
function reverseNumber(number){
    const numberAsStting = `${number}`
    let result= '';
    for (let i = numberAsStting.length -1; i>=0; i--){
        console.log(numberAsStting[i])
        result += numberAsStting[i];
    }

    return parseInt(result);
}
console.log(reverseNumber(x));

function checkEnding(word1, word2){
    const lastNChars = word2.length
    console.log(lastNChars);
    console.log(word1.length);
    const word1Short = word1.slice(word1.length - lastNChars)
    console.log(word1Short)

    return word1Short === word2;
}
console.log(checkEnding('sensei', 'ai'));
console.log(checkEnding('sensei', 'ei'));
console.log(checkEnding('sensei', 'sei'));
console.log(checkEnding('sensei', 'ensei'));


/*
    Сортирај стринг, така што секој збор во стрингот содржи една бројка (од 1 до 9)
    Овој број е позицијата на зборот во резултатот
    Пример:
    "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
    "4of Fo1r pe6ople g3ood th5e the2" => Fo1r the2 g3ood 4of th5e pe6ople"
*/
const sentence = "is2 Thi1s T4est 3a" 
//array1 = "4of Fo1r pe6ople g3ood th5e the2" 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function Sort(sentence){

    words = sentence.split(' ');
    console.log(words)
    console.log(words[0])
    
    for (let word of words){

        console.log(word)
        const chars = word.split('')
        console.log(chars)

    }


    return sentence;
}

const result = Sort(sentence);
console.log(Sort(result));
//console.log(Sort(array1));

/*
12. Write a function that find out if a string is a palindrome, lower or uppercased should be treated the same w === W

ex: isPalindrome('Wow') -> true
*/
function isPalindrome(word){
    word = word.toLowerCase();
    const reverseWord = word.split('').reverse().join('');
    console.log(reverseWord);
    return word === reverseWord;

}
console.log(isPalindrome('Melem'))
/*
7. Write a function factorial that calculates the factorial of a positive integer.
Example: factorial(3) should return 6. 
*/
function factorial(n){
    let product = 1;
    for (let i = 1; i <= n; i++) {
        console.log(i)
        product *=i;
    }
    return product;
}
console.log(factorial(5));



