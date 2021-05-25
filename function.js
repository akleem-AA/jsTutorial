// console.log("hello function")
//we are lerning to function and scop 
console.log('h3llo this is function tuterail')

function currency(amount,rate){
	let change=amount+2;
	
	return change;
}
var total =currency(42);
console.log(total)
//make a functon to change curruncy 
let nameL='khan'
function greet(name,thans){//this name is only work like a paremeter //is name (parementer)ki vajha se greet function m jo variable ka name de re h wo print hoga
	console.log(`hello ${name}`)//jo y name h assing the value of variable
}
let name='akleem'
greet(nameL)
//if the function only hello return and call the functoin time us variable ka name print
greet()//this contion greet function call hello and undifine becous greet only function call not call a variable and any value



///factorial of number ...
 function fact(num){
	if(num==0||num==1)
		return 1;
		else
			return num*fact(num-1)
		
	
	

}
let num1=5;

console.log('no of factorial',fact(num1))
//solve problem then feeling is fantastic recursive functoin always work like a loop autometic call dynamicly workk.
function fibn(n){
	if(n==0)
		return 0;
	if(n==0||n==2)
		return 1;
	else 
		return fibn(n-1)+fibn(n-2);
}
let n=5;
for (let i=0; i<n; i++) {
	console.log('fibnonicc no',fibn(i));
}
