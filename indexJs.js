//.........string properties methodes & template literals in js.......
const name='akleem';
const last='ahmad';
console.log(name,last);
let str;
str='<html to assing value' +'add the string wrting ';
str=str.concat('using to concat function to add srting ','and other method ')
console.log(str)

//......check....lenght of string ..
console.log(str.length);

//...toUperCase() using to all wirte convert uperCase
console.log(str.toUpperCase());

//...print a charecter by using lenght to print.
//give the no to print string 
 console.log(str[55]);

 //..print the charecter uing name to call function- indexOf()
 //give the string to print no of index
 console.log(str.indexOf('add'));

 //using ot charAt() function to pringt 1 index how many chareter
 // console.log(str.charAt(5));
 
 //check the last sring method is aveable in paragraph
 //not fund ot pringt false and ture only output
 console.log(str.endsWith('abc'))

//to serach this world is exist my paregraph to using inlcudes
console.log(str.includes('add'))

//print the substring in index 0to end to using function substing()
// console.log(str.substring(0,66))
//semilar to subsring and slice()function diffret b/w subs is no pirnt -1

//to print last string usnig slice()..
console.log(str.slice(-8))

//////to conver a string to array using to split()
console.log(str.split( 'h'))

//replace the string and change to meaing of world.
console.log(str.replace('add',' sub'))

let arr="apple";
let arr1="banana";
let myHtml=`hello ${name}
<h1>hii i liked coffice to complare like ${arr}and ${arr1}  `;
document.body.innerHTML=myHtml;