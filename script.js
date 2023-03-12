function computerPlay(){
    const options = [`rock`, `paper`, `scissors`];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
//function that plays a single round of Rock,Paper and Scissors
function playerRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    //determine winner based on Selection
    if(playerSelection === computerSelection.toLowerCase()){
        return `It's a TIE!`;
    } else if(
        (playerSelection === `rock` && computerSelection === `scissors`)||
        (playerSelection === `paper` && computerSelection === `rock`)||
        (playerSelection === `scissors` && computerSelection === `paper`)
    ){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You LOOSE! ${computerSelection} beats ${playerSelection}`;
    }
}
//function that plays 5 round game of Rock, paper and scissors
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++) {
        const playerSelection = prompt(`Choose Rock, Paper or Scissors`);
        const computerSelection = computerPlay();
        const result = playerRound(playerSelection, computerSelection);
        console.log(result);

        if(result.startsWith(`You WIN!`)){
            playerScore++;
        } else if(result.startsWith(`You LOOSE`)){
            computerScore++;
        }
    }
    return result
}
console.log(game())




