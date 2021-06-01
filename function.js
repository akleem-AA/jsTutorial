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





///what could one function call to another function()
function sum(a,b){
	return a+b;

}
function result(res){
	return res/2;
}
console.log('result',result(4))
console.log('duble funtion call ',result(sum(5,5)))//the doble functon call togther
//////yes to function is simply call one in another