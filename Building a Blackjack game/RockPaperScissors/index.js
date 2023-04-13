let hands = ["rock","paper","Scissor"]

//create a function that returns a random form the array
function getHand() {
    let randomIndex=Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())