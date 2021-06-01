console.log('the great name of alha')
//check the vlaue of using to assingmetn opertater 
const age=25;
if (age==20) {
	console.log("if the age is 20 year");
}
else if(age==25){
	console.log("age is equel to 25")
}
else{
	console.log("if the age is not equel of 20 year");
}
// */mostly used the if condtion that show a alert on the screed
// to used a conditon which vlaue is equel and not equel/*

// else if(age==25)
// {
// 	console.log("this age is 25")

// }
// else{
// 	console.log("ge is not 25 ")
// }
const a=34;
if(a!=34) {
console.log("this age is not equel to 34")
}
else{
	console.log("this age is valid")
}
//this variable is exist and non exist to check 
if (typeof vari !=='vari') {
	console.log('vari is define ')

}
else{
	console.log("vari is not define")
}
//the boolean experesion check with a variable using boolean 
const boolean= true;
let b=23;
if (boolean || b>23) {
	console.log('this is boolean variable is true and you can drives')

}
else{
	console.log('the flase condtion is not run the value')
}
//terminal operator using to console.log(if condtion is setisfy)
console.log(b==23?'age is 23':'age is not 23')

//swich case using  to solve a geven problem
let c=30;
switch(c){
	case 18:
	console.log('you age is 18')
	break;
case 30:{
console.log('your age is 34')
}
break;
default:
console.log('you case is not match with any age !25')
break;
}




/////////check the two condition using && operator ,.....

// table
// Operand 1	Operand 2	AND
// true	true	true
// true	false	false
// false	true	false
// false	false	false
function AND(num) {
	if (num>4&&num<=20){
		return '4 greter then and 20 less then'
	}
	return 'it no 4 less then and 20 greter then'
	// body...
}
console.log('4>less then',AND(2))
console.log('4greater< then',AND(13))
console.log('20 less then',AND(22))
///end ..........


//OR operator is the Called Logical AND operator.
 // If both the operands are non-zero, then condition becomes true. ...
 //  Called Logical OR Operator. If any of the two operands is non-zero, 
 //  then condition becomes true. (A || B) is tru

function or(no){
	if(no>20||no<5){
		return 'OUTSIDE'
	}
	return 'INSIDE'

}

console.log('20 or 5 se choti value',or(4))
console.log('20 or 5 ke ander ki value',or(10))






/////////////////////////////how to find factorial  no by using the recursive function
///factorial of number ...
//the *****(5) factorial is 5*4*3*2*1=120
 function fact(num){
    if(num==0||num==1)
	 return 1;
	else
	   return num*fact(num-1)
}
let num1=5;

console.log('no of factorial',fact(num1))
//solve problem  recursive functoin always work like a loop autometic call dynamicly workk.
// ...........end.....