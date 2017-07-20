// declare require variables
var BasicCard=require("./basicCard.js");
var ClozeCard=require("./basicCard.js");
var inquirer=require("inquirer");
var basicFlashcards=[];
var clozeFlashcard=[];
var score;
var x=0;
var i=0;


basicFlashcards.push(new BasicCard(
	"Front: I go in hard, I come out soft, you blow me hard, what am I?", "Gum"));

basicFlashcards.push(new BasicCard(
	"Front: The more you take, the more of me you leave behind. What am I?", "Footsteps"));

basicFlashcards.push(new BasicCard(
	"Front: What do you call a Bear without an ear?", "B"));

basicFlashcards.push(new BasicCard(
	"Front: What room do ghosts avoid?", "The living room"));

basicFlashcards.push(new BasicCard(
	"Front: ", "  "));

basicFlashcards.push(new BasicCard(
	"Front: ", "  "));

function startSession(){
	score=0;
	console.log("");
	console.log("");
	console.log("****************************************************");
	console.log("");
	console.log("------------------ Riddle Me This ------------------");
	console.log("");
	console.log("****************************************************");
	console.log("");
	console.log("");
	inquirer.prompt([
	{	
		type: "list",
		name: "cardType",
		message: "Please choose type of flashcards:",
		choices: ["Basic Cards", "Cloze Cards"]
	}
	]).then(function(choice){
		if (choice.cardType==="Basic Cards"){
			playBasic(0);
		}
		else {
			console.log("Fill in the blank:")
			playCloze(0);
		};

	});
};

