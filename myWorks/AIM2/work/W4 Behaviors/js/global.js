// $(); the dollar sign is how jquery is used


$(function (){
	// Variables
	var menuToggle = $('#menu-toggle');
	var menuContent;

	menuToggle.on('click', function(){
		alert("word")
	});


	// Functions
	function greet(string){
		console.log(string);
	}

};
// greet("hello world");