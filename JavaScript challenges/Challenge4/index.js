let data = [
    {
        player: "Suvi",
        score: 52
    }, 
    {
        player: "Thangamani",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const suviBtn=document.getElementById("suvi-btn")
suviBtn.addEventListener("click", function(){
    console.log(data[0])
})