//document.getElementById("count-el").innerText=5
//cmd+k+c
// let firstBatch=5

// let secondBatch=7
// let count=firstBatch+secondBatch
// console.log(count)

//First assignment
//1.create a varibale ,myAge, and set its value to your age
//let myAge=21

//2.log the myAge variable to the console
//console.log(myAge)

//Second Assignment
// 1.create two variables,myAge anf humanDogRatio
// 2/multiply the two together and store the result in myDogAge
// 3.Log myDogAge to the console
//sol:
// 1 human year~7 dog years
// let myAge=35
// let humanDogRatio=7
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge)

//chapter-06 reassigning the variable
// let count =5
// count=count+1
// count=count*10;
// console.log(count)

//Third assignment
//create a variable,bonuspoint.intialize it as 50,increases at 200
//decrease it down to 25,and then finally increase it to 70

// let bonusPoints=50
// console.log(bonusPoints)

// bonusPoints=bonusPoints+50;
// console.log(bonusPoints)

// bonusPoints=bonusPoints-75
// console.log(bonusPoints)

// bonusPoints=bonusPoints+45
// console.log(bonusPoints)


//Chapter-7  //Adding a button
//chapter-8 //The onClick event Listener

//intialize the count=0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

function increment()  {
console.log("The button was clicked")

}


//chapter-9 using the function  to write less code
// function countdown(){

// }
//chapter-10: write your first function code
//create a function(you decide the name) that logs out the number 42 to the console
//call/invoke the function

function myLogger(){
    console.log(42)
}

myLogger()

//chapter 11: write the function that logs the sum

//Fourth Assignment
let lap1=34
let lap2=33
let lap3=36

//create a function that logs out the sum of all the lap times
function logsOutTheSum(){
    let totalTime=lap1+lap2+lap3
    console.log(totalTime)
}

logsOutTheSum()

//chapter 12: write the function that increments
let lapsCompleted=0

//create a function that increments the lapscompleted variable with one
//run it three times

//how to variable increment in js
function incrementLap(){
    lapsCompleted=lapsCompleted+1
}
incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)

//chapter 13 increment on the clicks

// let count=0
// function increment(){
// count=count+1
// console.log(count)
// }

//chapter 14 display the count

//camel case
// let countEl=document.getElementById("count-el")
// console.log(countEl)
// let count=0
// function increment(){
//     count=count+1
//     countEl.innerText=count
// }

//chapter 15-The Document(HTML) Object Model(representation)
// (aka how you use javascript to modify a website)

//chapter -17 create the save button
//1.cretae a function, save() which logs out the count when its called

function save(){
    console.log(count)
}

//chapter-18 What is String

//chapter-19 Write your first string variable
let username='suvi'
console.log(username)
//fifth assignment
//create a variable,message, that stores the string: "you have tree new notifications"

let message="you have tree new notifications "

console.log(message + " "  + username)

//sixth assignment
//create a varibale, messageToUser,that contians the message we have logged

let messageToUser =message + " , " + username + "!"
console.log(messageToUser)

//seventh assignment
//create two variable, name and greeting. The name variable should store your name,
//and the greeting should store e.g "hi my name is "

//create the third varibale,myGreeting , that concatenates the two string
//log myGreeting to the console

let name="swetha"
let greeting="welcome! my name is  "
console.log(name + " " + greeting)

let myGreeting=greeting + name 
console.log(myGreeting)

//chapter -21 String vs Numbers
let points=4
let bonuspoint="10"

let total=points+bonuspoint
console.log(total)

//Eighth assignment
console.log(4+5) //9
console.log("2"+"4") //24
console.log("5" +1) //51
console.log(100+"100") //10000

//chapter-22 render a welcome Message
//Refer----->>assignment folder

//chapter -24 use plus equal for count
//count=count+1 -->count+=1

//chapter -25 create the save feature
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

let count=0
console.log(saveEl)
function increment(){
    count+=1
    countEl.textContent=count

}

function save(){
   let countStr=count + " - "
   saveEl.textContent+=countStr
   countEl.textContent=0
   count=0
}

//chapter-26: debugging online
//-->mozilla developers mvn devops tool--->read documentation

//chapter-28--> congrats and recap