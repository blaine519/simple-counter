let incrementButton = document.querySelector("#increment"); 
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter"); 

// increment button
incrementButton.addEventListener("click", function() {
    console.log("+ button clicked");
    let newCounterValue = Number(counter.innerHTML) + 1;
    if(newCounterValue >= 10){
        counter.style.color = "red";
    }
    counter.innerHTML = newCounterValue;
  }) 

// decrement button
decrementButton.addEventListener("click", function() {
    console.log("- button clicked");
    let newCounterValue = Number(counter.innerHTML) - 1;
    if (newCounterValue < 10){
        counter.style.color = "black";
    }
    if (counter.innerHTML > 0) {
        counter.innerHTML = newCounterValue;
    }
})