
let choices = document.querySelectorAll(".choices")
let show = document.getElementById("show")
let userScore=document.getElementById("userscore")
let compScore=document.getElementById("compscore")
let play=document.querySelector(".play")

function gencompChoice(userChoice,compChoice) {
    let options = ["rock", "paper", "scissor"]
    let randomChoice = Math.floor(Math.random() * 3)
    return options[randomChoice]
}
function drawGame() {
    show.innerText = "game was draw"
    play.style.backgroundColor-"orange"
}
let ScoreOfUser=0
let ScoreOfComp=0
let showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        show.innerText=`user is winner ${userChoice} beats ${compChoice}`
        userScore.innerText=ScoreOfUser++
        play.style.backgroundColor="green"

    } else {
        show.innerText = `computer is winner  ${compChoice} beats ${userChoice}`
        play.style.backgroundColor="red"
        compScore.innerText=ScoreOfComp++;
    }
}
function playGame(userChoice) {
    let compChoice = gencompChoice()
    console.log("computer choice=" + compChoice)
    console.log("user choice=" + userChoice)

    if (userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper scissor
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            //scissor rock
            userWin = compChoice === "scissor" ? false : true
        } else {
            //paper rock
            userWin = compChoice === "paper" ? true : false
        }
        showWinner(userWin,userChoice,compChoice)
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })

});
