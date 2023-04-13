//grab the welcome-el paragraph and store it in a variable called welcomeEl

//create two variable(name&greeting) that contains your name
//and greeting we want to render on the page

//render the welcome message using welcomeEl.innerText


let welcomeEl=document.getElementById("welcome-el")
console.log(welcomeEl)
let name="swetha manikandan"
let greeting="Hey! , This is  "
function message(){
    welcomeEl.innerText=greeting + "" + name +"!"
}
message()

//improve the message with string concatenation

//add an emoji to the end!"😀"
//write your code below here
//HINT: count=count+1

welcomeEl.innerText += "😀"