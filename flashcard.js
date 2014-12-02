//Flashcard JS Game
//By Jeff Everhart

//load array of cards in JSON

var cards = [

{
	
	"word":"foo",
	"definition":"bar",
	"difficulty": 3
}, 
{
	"word":"Hello",
	"definition":"World",
	"difficulty": 2
},
{
	"word":"John",
	"definition":"Coltrane",
	"difficulty": 1
},
{
	"word":"TBONE",
	"definition":"Walker",
	"difficulty": 2
},
{
	"word":"BB",
	"definition":"King",
	"difficulty": 3
},
{
	"word":"Eric",
	"definition":"Clapton",
	"difficulty": 1
}];

var counter = 0;
var firstTime = true;


//Display first card from array

$(".vocab-term").text(cards[counter].word);
$(".vocab-def").text(cards[counter].definition);

for( var i = 0; i <= cards.length; i ++)
	$(".progress-grid").append('<span class="box default"></span>');


function changeCard(diffLevel){
	cards[counter].difficulty = diffLevel;
	
	if (cards[counter].difficulty === 3){
			$(".box").eq(counter).addClass("easy");
		}

	counter = counter + 1;
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
