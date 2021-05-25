console.log("hello loop")
//for while and do while loop 
// for(let i=0 ; i<10; i++){
// 	console.log(i)
// }
//while loop 
let a=0;
while(a<10){
	console.log(a,'hello')
	a+=1;
}
//do while 
let k=0;
do{
	
		k+=1;
	
	console.log(k,'akleem')
}while(k<20)
//the loop used togethe switch case experiment self
// for(let j=0;j<100;j++){
// 	switch(j){
// 		case j=5:
// 		console.log('[this is 5 element')
// 		break;
// 		case j=50:
// 		console.log('this is 50')
// 		break;
// 		default:
// 		console.log('switch')
// 		break;
// 	}
// console.log(j)
// }
//don't work this loop becous switch case is unfinite run 


//i will create a arr and use to forEach funtion 

// let arr=[3,5,3,7,43,];
// arr.forEach(function fun(argument) {
// 	// body.
// 	console.log(argument)
// })
console.log('end this loop condtion')
//if i were break the ,he world stop yet
let ab=0;
do{
	console.log(ab+1)
	if(ab==5){
		break;
	}
ab+=1
}while(ab<10)
console.log('break statment is egnor contion to print next stament')
//contine stamenent if he were use this would engore. which used to this conditon,
//example:
for(let i=0;i<10;i++) {

	if(i==5){
		continue;
	}
	console.log(i)
}
//that is not print 5 becous 5 is continue stamtment
console.log('end continue stamtment')
//as you try same work use on while loop
let conti=0;
while(conti<10){
	conti++;
	if (conti==5) {
		break;//continue
	}
	console.log(conti)
}
// //same work as together loop ......hhahah.
console.log('testing self repeat array pop and push condtion')
// let ar1=[1,4,3,5,3,5,3,1];
// for(let i=0;i<arr.lenght;i++){
// 	const ar=arr[i]
// 	console.log(ar)
// }
//i don't have confim idia to solve my problem.........




//full array print to use this forEach (function(argument)
let arr=[2,3,5,3,2,5,21,'hellko',222222];
arr.forEach(function(element,index,array){
	console.log(element, index, array);
	//isme hm or index ya array bi lik sakte he usme mil jayga
});
//some work as using for loop 
let arr1=[9,8,7,6,5];
for(let i=0;i<arr1.length;i++){
const element=arr[i];//create a variable to store value an array
console.log(element)
}
console.log('end print array using to forEach and loop condiotn')


//create an object and print object ramdomly print his properties
let obj={name:'akleem',roll:8931,type:'dangrous programer'}

for(let key in obj){
	console.log(key)//only print keys like name 
	console.log(obj[key])//print name with key 
	// console.log(`${key}  is ${obj[key]}`)//print the object wirte self
}
//used to `~ baktis`  if i were use bactis operator ,you would give up a result
//write somtin into object properties
let obj1={
	name:'khan',
	rollNo:31,
	type:'js programer'
}
for(let ak in obj1){
	// console.log(obj1[ak])
 	console.log(`${ak} of object is<br> ${obj1[ak]}`)
}

//object