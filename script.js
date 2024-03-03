const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

let userScore = document.querySelector("#user");
userScore = 0;
let compScore = document.querySelector("#comp");
compScore = 0;
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = () =>{
    msg.innerText = "Game draw.Play again.";  
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }
    else{
        msg.innerText = `You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    let userWin = true;
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor"?false:true;
        } 
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});