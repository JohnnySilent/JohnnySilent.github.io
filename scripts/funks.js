$(document).ready(function(){
	// $('.footer').hide();
});

function numbers() {
	var num = 0;
	var a = 5;
	var b = 4;
	var sol = a + b;
	return sol;
}

function talk() {
	var word = "Hello World";
	console.log(word);
}

var pushy = {
	color: "blue"
}
function FizzBuzz() {
	for (var i = 0; i >= 20; i++){
		if ((i % 3) === 0 && (i % 5) === 0){
			console.log("FizzBuzz");
		}
		else if ((i % 3) === 0){
			console.log("Fizz");
		} 
		else if ((i % 5) === 0){
			console.log("Buzz");
		} 
		else {
			console.log(i);
		}

	}
}