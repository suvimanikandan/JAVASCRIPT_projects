let firstCard = 6
let secondCard = 9
let isAlive=true
let hasBlackJack=false
let sum= firstCard + secondCard + 4
let message=""

//chapter -3 if else conditionals

if(sum < 21){
   message="Do you want to draw a new card? "
}

else if(sum === 21){
  message="Wohoo! you've got BlackJack!"
}

else {
message="you're out of the game!"
isAlive=false
}
