let a = "Tushar";
let b = "rahul";
// global scope- called global variables
function show(){
	// local variable
	let a = "Akleem"
	// local scope

	console.log(a);
	// console.log(b);
}

const add = (a,b)=>{// parameters 
	return a+b
}

const Iseven = (num)=>{
	if((num&1)==0){ // AND Operator
		return true;      
	}
	return false;
}



// const sum1 = add(3,4) // arguments
// console.log(sum1)

// console.log(Iseven(2))      

for(let i=1;i<=100;i++){
	if(Iseven(i)){
		console.log(i)
	}
}