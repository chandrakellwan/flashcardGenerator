// declare require variables
var BasicCard=require("./basicCard.js");
var ClozeCard=require("./clozeCard.js");
var inquirer=require("inquirer");
var basicFlashcards=[];
var clozeFlashcards=[];
var score;
var x=0;
var i=0;

//Used to make Basic flashcards
basicFlashcards.push(new BasicCard(
	"I go in hard, I come out soft, and you blow me hard, what am I?", "gum"));

basicFlashcards.push(new BasicCard(
	"The more you take, the more of me you leave behind. What am I?", "footsteps"));

basicFlashcards.push(new BasicCard(
	"What do you call a bear without an ear?", "b"));

basicFlashcards.push(new BasicCard(
	"What room do ghosts avoid?", "the living room"));

basicFlashcards.push(new BasicCard(
	"What travels around the world, but stays in one spot?", "a stamp"));

basicFlashcards.push(new BasicCard(
	"In a race, you pass the person in second place. What place are you in now?", "second"));

//Used to make Cloze flashcards
clozeFlashcards.push(new ClozeCard(
	"Gum goes in hard, comes out soft, you blow it hard.", "Gum"));

clozeFlashcards.push(new ClozeCard(
	"The more footsteps you take, the more you leave behind.", "footsteps"));

clozeFlashcards.push(new ClozeCard(
	"B is what you call a Bear without an ear.", "B"));

clozeFlashcards.push(new ClozeCard(
	"The living room is the room ghosts avoid.", "The living room"));

clozeFlashcards.push(new ClozeCard(
	"A stamp travels around the world, but stays in one spot?", "A stamp"));

clozeFlashcards.push(new ClozeCard(
	"In a race, you just passed the person in Second place, you are now in second place.", "second"));

//function used to start game 
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
	// function used to choose type of card
	]).then(function(choice){
		if (choice.cardType === "Basic Cards"){
			playBasic(0);
		}
		else {
				console.log("Fill in the blanks:")
				playCloze(0);
			};
		});
	};

//function used to determine if answer is right in basic cards
function playBasic() {
	
	if (i < 6) {
			inquirer.prompt([
			{	
				type: "input",
				name: "card",
				message: basicFlashcards[i].front		
			}
			]).then(function(response) {

					if (response.card === basicFlashcards[i].back) {
						console.log("");
						console.log("Right!");
						console.log("");
						i++;
						score++;
						playBasic();
					}
					else {
						console.log("Nope!");
						console.log("The answer is " + basicFlashcards[i].back);
						i++;
						
						playBasic();	
					}
			});	
	}
	else {
		console.log("");
		console.log("..............................");
		console.log("");
		console.log("Go study some more!");
		console.log("");
		console.log("You Scored: " + score + "/6");
		console.log("");
		console.log("..............................");
		console.log("");
		inquirer.prompt([
		{
			type: "list",
			name: "newGame",
			message: "Try Again?",
			choices: ["Yes", "No"]
		}
		]).then(function(response) {
			if (response.newGame === "Yes") {
				startSession();
				score = 0;
				x = 0;
				i = 0;
			}
			 
		});
		
	};
};
//function used to determine if answer is right in cloze cards
function playCloze() {
	
	if (x < 6) {
			inquirer.prompt([
			{	
				type: "input",
				name: "card",
				message: clozeFlashcards[x].partial		
			}
			]).then(function(response) {

					if (response.card === clozeFlashcards[x].cloze) {
						console.log("Right!");
						x++;
						score++;
						playCloze();
					}
					else {
						console.log("Nope!");
						console.log("The answer is " + clozeFlashcards[x].cloze);
						x++;
						
						playCloze();	
					}
			});	
	}
	// gives score 
	else {
		console.log("");
		console.log("..............................");
		console.log("");
		console.log("Go study some more!");
		console.log("");
		console.log("You Scored: " + score + "/6");
		console.log("");
		console.log("..............................");
		console.log("");
		inquirer.prompt([
		{
			type: "list",
			name: "newGame",
			message: "Try Again?",
			choices: ["Yes", "No"]
			
		}
		// function used to ask to play again and restart game or not
		]).then(function(response) {
			if (response.newGame === "Yes") {
				score = 0;
				x = 0;
				i = 0;
				startSession();

			} 
		});
	};
};

startSession();

