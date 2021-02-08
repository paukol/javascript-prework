function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
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

  function displayResult(argComputerMove, argPlayerMove){
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

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  console.log('Gracz wybrał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);
}

function buttonRockClicked(){
  playGame(1);
}
let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', buttonRockClicked);

function buttonPaperClicked(){
  playGame(2);
}
let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', buttonPaperClicked);

function buttonScissorClicked(){
  playGame(3);
}
let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', buttonScissorClicked);
