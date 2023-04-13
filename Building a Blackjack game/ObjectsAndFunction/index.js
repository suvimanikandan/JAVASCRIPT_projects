//create a person object that contains three keys:name,age and country.
//use yourself as an example to set the values for name,age and country

//create a function,logdate(),that uses for the person object to create age
//string in the following format:
//"per is 35 years old and lives in norway"

//call the logData() function to verify that it works


let person = {
    name:"swetha",
    age:35,
    country:"norway"

}

function logData(){
    console.log(person.name + " is " + person.age + "years old and lives in" + person.country)
}

logData()