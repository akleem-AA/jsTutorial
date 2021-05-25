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