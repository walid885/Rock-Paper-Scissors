const computer = document.getElementById('computerchoice')
const user =  document.getElementById('userChoice')
const res = document.getElementById('res')
const choices = document.querySelectorAll('button')
let userChoice
let computerchoice
let result
choices.forEach(choice => choice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    user.innerHTML = userChoice
    generateComputerChoice()
    getRes()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 +1 )  // or you can choose possible choices length 
    console.log(randomNumber);
    if(randomNumber === 1){
        computerchoice = 'rock'
    }
    if(randomNumber === 2){
        computerchoice = 'scissors'
    }
    if(randomNumber === 1){
        computerchoice = 'paper'
    }
    computer.innerHTML = computerchoice
}

function getRes(){
    if (computerchoice === userChoice) {
        result = 'its a draw!'
      }
      if (computerchoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
      }
      if (computerchoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
      }
      if (computerchoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
      }
      if (computerchoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
      }
      if (computerchoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
      }
      if (computerchoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
      }
    res.innerHTML = result
}

