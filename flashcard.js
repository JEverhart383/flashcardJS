//Flashcard JS Game
//By Jeff Everhart



$("document").ready(function(){

//load array of cards in JSON
var cards3 = [

{
	
	"word":"whack",
	"definition":"a mole",
	"difficulty": 0
}, 
{
	"word":"something",
	"definition":"bad",
	"difficulty": 0
},
{
	"word":"what",
	"definition":"happends",
	"difficulty": 0
},
{
	"word":"TBONE",
	"definition":"Walker",
	"difficulty": 0
},
{
	"word":"BB",
	"definition":"King",
	"difficulty": 0
},
{
	"word":"Eric",
	"definition":"Clapton",
	"difficulty": 0
}];


var cards2 = [

{
	
	"word":"cards2",
	"definition":"bcards2",
	"difficulty": 0
}, 
{
	"word":"cards2",
	"definition":"World",
	"difficulty": 0
},
{
	"word":"John",
	"definition":"Coltrane",
	"difficulty": 0
},
{
	"word":"TBONE",
	"definition":"Walker",
	"difficulty": 0
},
{
	"word":"BB",
	"definition":"King",
	"difficulty": 0
},
{
	"word":"Eric",
	"definition":"Clapton",
	"difficulty": 0
}];

var cards1 = [

{
	
	"word":"foo",
	"definition":"bar",
	"difficulty": 0
}, 
{
	"word":"Hello",
	"definition":"World",
	"difficulty": 0
},
{
	"word":"John",
	"definition":"Coltrane",
	"difficulty": 0
},
{
	"word":"TBONE",
	"definition":"Walker",
	"difficulty": 0
},
{
	"word":"BB",
	"definition":"King",
	"difficulty": 0
},
{
	"word":"Eric",
	"definition":"Clapton",
	"difficulty": 0
}];
	

$("input:radio[name=card-select]").click(function(){

var cards; 
var counter = 0;
var firstTime = true;



if ($(this).val() === "cards1"){
	cards = cards1;

}

if ($(this).val() === "cards2"){
	cards = cards2;

}

if ($(this).val() === "cards3"){
	cards = cards3;

}	


//clear previous progress grid
$('.progress-grid').empty();

//Display first card from array

$(".vocab-term").text(cards[counter].word);
$(".vocab-def").text(cards[counter].definition);

for( var i = 0; i < cards.length; i ++)
	$(".progress-grid").append('<span class="box default">&#10004;</span>');


function changeCard(diffLevel){
	cards[counter].difficulty = diffLevel;
	
	if (cards[counter].difficulty === 3){
			$(".box").eq(counter).addClass("easy");
		}

	counter += 1;
	if (counter >= cards.length){
			counter = 0;
			firstTime = false;
		} 
	$(".vocab-term").text(cards[counter].word);
	$(".vocab-def").text(cards[counter].definition);
	console.log(cards);
}//End changeCard function 


//When 1 button is click, update difficulty to 1

$(".hard").click(function(){
	changeCard(1);

});

//When 1 button is click, update difficulty to 1

$(".medium").click(function(){
	changeCard(2);

});

//When 1 button is click, update difficulty to 1

$(".easy").click(function(){
	changeCard(3);

});

});//End on radio change card load


});//End document ready function
