alert("Are you ready to play?");


/*
var targetNumber 112;

$("#number-to-guess").text(targetNumber);

var counter = 0;

//array
var numberOptions = [10, 5, 3, 1];

//for loop
for (var i = 0; i < numberOptions.length; i++) {
	numberOptions[i]
console.log("numberOptions");

}
*/


function random_result(19, 120) {
	// body...
	return Math.floor(Math.random() * (102) + 19);
}






random_result = Math.floor(Math.random() * 120 - 19); 

console.log(random_result);

$("#result").html('Random Results: ');




for (var i = 0; i < 4; i++) {

	var random = Math.floor(Math.random() * 12);
	console.log(random);

	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal'
			"data-random": random

			});
		$(".crystals").append(crystal);
}

