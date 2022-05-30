let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard=document.querySelector(".scoreboard");
const result_p =document.querySelector(".result_div > p");
const rock_div=document.getElementById("r");
const scissor_div=document.getElementById("s");
const paper_div=document.getElementById("p"); 

function computerChoice(){
    const choises=['r','s','p'];
    const randomChoice=Math.floor(Math.random()*3);
    return choises[randomChoice];
}

function convertToWord(letter){
    if(letter==="r")return "Rock";
    if(letter==="p")return "Paper";
    return "Scissors";
}

function win(user,comp) {
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userchoice=document.getElementById(user);
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord} You win!`;
    userchoice.classList.remove('grey-glow');
    userchoice.classList.remove('red-glow');
    userchoice.classList.add('green-glow');
        setTimeout(()=>
            userchoice.classList.remove('green-glow'),500);
    

}

function lose(user,comp) {
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userchoice = document.getElementById(user);
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} loses to ${convertToWord(comp)}${smallCompWord} You lose!`;
    userchoice.classList.remove('green-glow');
    userchoice.classList.remove('grey-glow');
    userchoice.classList.add('red-glow');
        setTimeout(()=>
             userchoice.classList.remove('red-glow'),500);
}

function draw(user,comp) {
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    userchoice=document.getElementById(user);
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} equals to ${convertToWord(comp)}${smallCompWord} It is a draw!`;
    userchoice.classList.remove('red-glow');
    userchoice.classList.remove('green-glow');
    userchoice.classList.add('grey-glow');
        setTimeout(()=>
            userchoice.classList.remove('grey-glow'),500);
}

function game(userChoice){
    const computerChoice = this.computerChoice();
    let avr=userChoice+computerChoice;
        switch (avr) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                break;
            case "pp":
            case "ss":
            case "rr":
                draw(userChoice, computerChoice);
                break;
        }
}

function main(){
    if(rock_div)
    rock_div.addEventListener('click',function(){
        game("r");
    })
    if(scissor_div)
    scissor_div.addEventListener("click",function(){
        game("s");
    })
    if(paper_div)
    paper_div.addEventListener("click",function(){
        game("p");
    })
}
main();