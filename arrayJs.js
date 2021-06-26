console.log('hello array tuterial')

//create a array to define value
let arr=[23,34,34,'hello'];
const arString=['orange',66,'apple',50,'pineapple',89];
let arr1=new Array('hello',59,'hii',90);
console.log(arr)
console.log(arr1)
//add to array in a string to other string
arString[2]='hello this is me'+'not is errow',534 +3;
console.log(arString)
//any variable to add a array and print value
let arrelement=arString[2]
console.log('element:',arrelement);
console.log(arString)

//store the value any varaivble and check the index of the element
let vlaue=arr.indexOf(34);
console.log(vlaue)

// value an array chnage to index
arr[3]='akleem'
console.log(arr)

//push the value in array 
arr.push('khan')
console.log(arr)

//the add fist element into array
arr.unshift('fist')
console.log(arr)

//the last element end of the array by using pop()
arr.pop()
console.log(arr)

//the fist element is delete  of the array by using shift()
arr.shift()
console.log(arr)

//delete the element b/w the array to using splice()
 arr.splice(1,2)
 console.log(arr)

 //reverse the array full array reverese by using reverese()
 arr.reverse()
 console.log(arr)

 //concat using to change value of const variable
 arr=arr.concat(arString)
 console.log(arr)
 ////end of array function....







//  /Task

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

// Sample Input 0

// javascriptloops
// Sample Output 0

// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// Explanation 0

// Observe the following:

// Each letter is printed on a new line.
// Then the vowels are printed in the same order as they appeared in .
// Then the consonants are printed in the same order as they appeared in .

// ansewer//////
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

const vowels = 'aeiou';

var consonants = '';

for (var i = 0; i < s.length; i++) {

if (vowels.includes(s[i])) {

console.log(s[i]);

}

else {


consonants += s[i] + '\n';

}

}

console.log(consonants.trim());


}


  
