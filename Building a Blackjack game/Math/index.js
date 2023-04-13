//why generate random numbers ex:dice,cards
let randomNumber=Math.random()

console.log(randomNumber)

/*
what does math.random() do?

your answer:random number between 0 and 1(not inclusive of 1) 0.00 --->0.999
*/

//Math.random()
//we create a dice function
let random =Math.random() *6
console.log(random)

//flooering the number in dice function 
let floorNumber=Math.floor(3.4567)
console.log(floorNumber)
/*
what does Math.floor() to do positive numbers?
your answer: it is removes the decimal

*/

let r=Math.floor(Math.random()*6)
console.log(r)

//completing your dice function
//try to modify the expression so that we get a range from 1 to 6
let re=Math.floor(Math.random()*6)+1
console.log(re)

//create a function, rolldice(),that returns a random number between 1 and 6
function rolldice(){
    let ran=Math.random()*6
    return ran;
}
console.log(rolldice())