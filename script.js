const computerChoiceDisplay = document.getElementById(`computer-choice`)
const userChoiceDisplay = document.getElementById(`user-choice`)
const resultDisplay = document.getElementById(`result`)
const possibleChoices = document.querySelectorAll(`button`)
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener(`click`, (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3) +1
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = `rock`
    }
    if(randomNumber === 2){
        computerChoice =`scissors`
    }
    if(randomNumber === 3){
        computerChoice = `paper`
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    userChoice = userChoice.toLowerCase();
    if(computerChoice === userChoice){
        result =`It's a TIE!`
    }
    if(computerChoice === `rock` && userChoice === `paper`){
        result =`You WIN!`
    }
    if(computerChoice === `rock` && userChoice === `scissors`){
        result =`You LOOSE!`
    }
    if(computerChoice === `paper` && userChoice === `scissors`){
        result =`You WIN!!`
    }
    if(computerChoice === `paper` && userChoice === `rock`){
        result =`You LOOSE!`
    }
    if(computerChoice === `scissors` && userChoice === `rock`){
        result =`You WIN!`
    }
    if(computerChoice === `scissors` && userChoice === `paper`){
        result =`You LOOSE!`
    }
    resultDisplay.innerHTML = result
} 
   