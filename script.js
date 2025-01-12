
// const display = document.getElementById("display-value");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "0";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value); 
//     }catch(error){
//         display.value = "Error";
//     }
// }

// --------------------------------------------------------------------------

const display = document.getElementById("display-value");

function appendToDisplay(input) {
    // Avoid appending multiple leading zeros
    if (display.value === "0" && input === "0") return;

    // Replace leading zero with the input if it's not an operator
    if (display.value === "0" && !isNaN(input)) {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    // Reset display to a default value
    display.value = "0";
}

function deleteElements() {
    // Remove the last character from the display
    if (display.value.length === 1) {
        display.value = "0";  // If there's only one character, reset to "0"
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// function calculate() {
//     try {
//         // Evaluate the expression
//         const result = eval(display.value);

//         // Update the display with the result
//         display.value = result;
        
//     } catch (error) {
//         // Display a user-friendly error message
//         display.value = "Error";
//     }
// }

function calculate() {
    try {
        // Construct a new function that returns the result of the expression
        const result = new Function(`return ${display.value}`)();  
        
        // Check if result is a valid number
        display.value = Number.isFinite(result) ? result : "Error";  
    } catch (error) {
        display.value = "Error";  // Handle any invalid input
    }
}
