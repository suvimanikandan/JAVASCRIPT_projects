let hasCompletedCourse = true
let givesCertificate = true

//nested if conditions

if(hasCompletedCourse == true){
    if(givesCertificate==true){
        generateCertificate()
    }
}
function generateCertificate(){
    console.log("generating certificate.....")
}

//logical operator

let hasSolvedChallenge = false
let hasHintsLeft=false

//cretae a function is statement that checks that both varibales are false
//if so, run the showsolution() function

if(hasSolvedChallenge==false && hasHintsLeft==false){
    showSolution()
}
function showSolution(){
    console.log("showing the solution.....")
}