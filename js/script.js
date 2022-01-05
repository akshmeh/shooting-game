var startButton =  document.getElementsByClassName('start-button'),
gameEnv = document.getElementsByClassName('game-env'),
result = document.querySelector('.result'),
power,
playerTurn , // false --> 1st player || true --> 2nd player
playerTurnRandom= [true, false],
healthFirstPlayerCount = 100,
healthSecondPlayerCount = 100,
healthFirstPlayer =  document.querySelector('.player-1 .health'),
healthSecondPlayer =  document.querySelector('.player-2 .health'),
characterPlayerOne = document.querySelector('.player-1 .character img'),
characterPlayerSecond = document.querySelector('.player-2 .character img'),
finalWinner = document.querySelector('.final-winner'),
matches = document.querySelector('.matches'),
playeronewoncountele = document.querySelector('.player-one-won-count'),
playersecondwoncountele = document.querySelector('.player-secon-won-count'),
finalHealth = false,
playerOneWonCount=0,
playerSecondWonCount=0,
roundCount=1,
timer = 500  

startButton[0].addEventListener('click',()=>{
    matches.style.display="block"
    startButton[0].style.display = 'none';
    result.style.display="block"
    gameEnv[0].style.display = "flex";
    setTimeout(()=>{
            
        firstTurn();
    },timer)
}) 
function firstTurn(){
    playerTurn = playerTurnRandom[Math.floor(Math.random()*playerTurnRandom.length)];
    // console.warn('player turn: ' + playerTurn);
    setTimeout(()=>{

        powerRandom()
    },timer)
}
function powerRandom(){
    // Math.floor(Math.random() * 5)
    power = Math.floor(Math.random() * 5)
    // console.warn('power: '+ power);
    validateHealth()
}

function roundCounter(){
    if(roundCount<5){
        // console.warn(roundCount);
       playeronewoncountele.innerHTML = playerOneWonCount
       playersecondwoncountele.innerHTML = playerSecondWonCount
        nextRound()
    }
    if(roundCount==1){
        matches.innerHTML = 'Second Round'
    }
    if(roundCount==2){
        matches.innerHTML = 'Third Round'
    }
    if(roundCount==3){
        matches.innerHTML = 'Fourth Round'
    }
    if(roundCount==4){
        matches.innerHTML = 'Fifth Round'
    }
    if(roundCount==5){
        playeronewoncountele.innerHTML = playerOneWonCount
       playersecondwoncountele.innerHTML = playerSecondWonCount
        if(playerOneWonCount<playerSecondWonCount){
            finalWinner.innerHTML ="Second Player"
            characterPlayerSecond.src = 'img/game-winner.png'
                            characterPlayerOne.src = 'img/game-looser.png'
                            healthFirstPlayer.innerHTML = '0%'
                            healthSecondPlayer.innerHTML = 'Winner'


        }else{
            finalWinner.innerHTML ="First Player"
            characterPlayerOne.src = 'img/game-winner.png'
                            characterPlayerSecond.src = 'img/game-looser.png'
                            healthSecondPlayer.innerHTML = '0%'
                            healthFirstPlayer.innerHTML = 'Winner'

            
        }
    }
    roundCount++
   
}
function nextRound(){
    healthFirstPlayer.innerHTML = '100%'
    healthSecondPlayer.innerHTML = '100%'
    healthSecondPlayerCount = 100
    healthFirstPlayerCount = 100
    firstTurn()
   
}
function validateHealth(){
   
    if(healthFirstPlayerCount<=0){
        characterPlayerSecond.src = 'img/game-winner.png'
                            characterPlayerOne.src = 'img/game-looser.png'
                            healthFirstPlayer.innerHTML = '0%'
                            healthSecondPlayer.innerHTML = 'Winner'
                            playerTurn = undefined
                            playerSecondWonCount++
                            roundCounter()
                            
                        }else if(healthSecondPlayerCount<=0){
                            // console.warn('health Second player ' + healthSecondPlayerCount);
                            characterPlayerOne.src = 'img/game-winner.png'
                            characterPlayerSecond.src = 'img/game-looser.png'
                            healthSecondPlayer.innerHTML = '0%'
                            healthFirstPlayer.innerHTML = 'Winner'
                            playerOneWonCount++
                            
                            playerTurn = undefined
                            roundCounter()
        
                    }
            else{
 
                if(playerTurn){
                    setTimeout(()=>{
                        
                        playerOneHit()
                    },timer)
                }else{
                    setTimeout(()=>{
                        
                        playerSecondHit()
                    },timer)
                }
            }
    
}


function playerOneHit(){
if(power==0){
    healthSecondPlayerCount = healthSecondPlayerCount - 5;
    if(healthSecondPlayerCount<=0){
        healthSecondPlayerCount = 0
    }
healthSecondPlayer.innerHTML = healthSecondPlayerCount + '%';
characterPlayerOne.src = 'img/hit-winner.png'
characterPlayerSecond.src = 'img/hit-looser.png'
playerTurn = false;
setTimeout(()=>{
        
    powerRandom()
},timer)
}
if(power==1){
    healthSecondPlayerCount = healthSecondPlayerCount - 10;
    if(healthSecondPlayerCount<=0){
        healthSecondPlayerCount = 0
    }
healthSecondPlayer.innerHTML = healthSecondPlayerCount + '%';
characterPlayerOne.src = 'img/hit-winner.png'
characterPlayerSecond.src = 'img/hit-looser.png'
playerTurn = false;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==2){
    healthSecondPlayerCount = healthSecondPlayerCount - 15;
    if(healthSecondPlayerCount<=0){
        healthSecondPlayerCount = 0
    }
healthSecondPlayer.innerHTML = healthSecondPlayerCount + '%';
characterPlayerOne.src = 'img/hit-winner.png'
characterPlayerSecond.src = 'img/hit-looser.png'
playerTurn = false;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==3){
    healthSecondPlayerCount = healthSecondPlayerCount - 25;
    if(healthSecondPlayerCount<=0){
        healthSecondPlayerCount = 0
    }
healthSecondPlayer.innerHTML = healthSecondPlayerCount + '%';
characterPlayerOne.src = 'img/hit-winner.png'
characterPlayerSecond.src = 'img/hit-looser.png'
playerTurn = false;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==4){
    healthSecondPlayerCount = healthSecondPlayerCount - 30;
    if(healthSecondPlayerCount<=0){
        healthSecondPlayerCount = 0
    }
healthSecondPlayer.innerHTML = healthSecondPlayerCount + '%';
characterPlayerOne.src = 'img/hit-winner.png'
characterPlayerSecond.src = 'img/hit-looser.png'
playerTurn = false;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
}
function playerSecondHit(){
if(power==0){
    healthFirstPlayerCount = healthFirstPlayerCount - 5;
    if(healthFirstPlayerCount<=0){
        healthFirstPlayerCount = 0
    }
healthFirstPlayer.innerHTML = healthFirstPlayerCount + '%';
characterPlayerSecond.src = 'img/hit-winner.png'
characterPlayerOne.src = 'img/hit-looser.png'
playerTurn = true;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==1){
    healthFirstPlayerCount = healthFirstPlayerCount - 10;
    if(healthFirstPlayerCount<=0){
        healthFirstPlayerCount = 0
    }
healthFirstPlayer.innerHTML = healthFirstPlayerCount + '%';
characterPlayerSecond.src = 'img/hit-winner.png'
characterPlayerOne.src = 'img/hit-looser.png'
playerTurn = true;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==2){
    healthFirstPlayerCount = healthFirstPlayerCount - 15;
    if(healthFirstPlayerCount<=0){
        healthFirstPlayerCount = 0
    }
healthFirstPlayer.innerHTML = healthFirstPlayerCount + '%';
characterPlayerSecond.src = 'img/hit-winner.png'
characterPlayerOne.src = 'img/hit-looser.png'
playerTurn = true;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==3){
    healthFirstPlayerCount = healthFirstPlayerCount - 25;
    if(healthFirstPlayerCount<=0){
        healthFirstPlayerCount = 0
    }
healthFirstPlayer.innerHTML = healthFirstPlayerCount + '%';
characterPlayerSecond.src = 'img/hit-winner.png'
characterPlayerOne.src = 'img/hit-looser.png'
playerTurn = true;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
if(power==4){
    healthFirstPlayerCount = healthFirstPlayerCount - 30;
    if(healthFirstPlayerCount<=0){
        healthFirstPlayerCount = 0
    }
healthFirstPlayer.innerHTML = healthFirstPlayerCount + '%';
characterPlayerSecond.src = 'img/hit-winner.png'
characterPlayerOne.src = 'img/hit-looser.png'
playerTurn = true;
 setTimeout(()=>{
        
     powerRandom()
    },timer)
}
}
