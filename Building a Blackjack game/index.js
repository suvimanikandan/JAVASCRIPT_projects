//1.create two variables,firstCard and secondCard
//set their values to a random number between 2-11

//2.create a variable, sum,and set it to the sum of the two cards

let firstCard = 6
let secondCard = 9
let isAlive=true

let sum= firstCard + secondCard + 4
console.log(sum)

//chapter -3 if else conditionals

if(sum < 21){
   console.log("Do you want to draw a new card? ")
}

else if(sum === 21){
  console.log("Wohoo! you've got BlackJack!")
}

else if(sum > 21){
console.log("you're out of the game!")
isAlive=false
}

//chapter 4: your first if else statement
let age=22
if(age<=21){
    console.log("you can enter the club")
}
else {
    console.log("welcome")
}

//chapter -5  your if-else statement
let Age=100
if(Age <=100){
console.log("Not elgible")
}
else if(Age===100){
    console.log("Here is your birthday card from the king!")
    hasBlackJack=true
}
else {
    console.log("Not elgible!, you have already gotten one")
}

//chapter 9: lets practice boolean conditions
//if(true)

//chapter 10: add the message variable
