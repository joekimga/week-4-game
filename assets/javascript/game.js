alert("Collect the Crystals before Jesse pinkman smokes them all!");


/*OLD ACTIVITY
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


/*STILL WORKING ON IT
function random_result(19, 120) {
	// body...
	return Math.floor(Math.random() * 102) + 19;
	console.log(random_result);

	$("#result").html('Random Results: ');
}*/

// random_result = Math.floor(Math.random() * 120 - 19); 

// console.log(random_result);

// $("#result").html('Random Results: ');



var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function() {
	$("#imgDiv").empty();

	var images = [
		'assets/images/tumblr_nhm15jkl6s1tgfqygo2_500.gif'.
		'assets/images/giphy (2).gif'
		'assets/images/giphy (3).gif'
		'assets/images/tumblr_oktm832xWw1vsjcxvo1_500.gif'];









}













for (var i = 0; i < 4; i++) {

	var random = Math.floor(Math.random() * 12) + 1;
	console.log(random);

	var imgDiv = $("<div>");
		imgDiv.attr({
			"id": 'imgDiv'
			"data-random": random

			});
		$("#imgDiv").append(imgDiv);
}

