{
  const playGame = function(playerInput){
  clearMessages();
  const getMoveName =  function(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  const displayResult = function(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == argPlayerMove){
      printMessage('Remis!');
    } else{
      printMessage('Przegrałeś!');
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  console.log('Gracz wybrał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);
}

const buttonRockClicked = function(){
  playGame(1);
}
const rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', buttonRockClicked);

const buttonPaperClicked = function(){
  playGame(2);
}
const paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', buttonPaperClicked);

const  buttonScissorClicked = function(){
  playGame(3);
}
const scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', buttonScissorClicked);
}
