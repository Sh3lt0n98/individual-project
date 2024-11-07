// Handle click event for adding numbers
document.getElementById("addNumbersLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Ask the user to enter two numbers
    const num1 = parseFloat(prompt("Please enter the first number:"));
    const num2 = parseFloat(prompt("Please enter the second number:"));
    
    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
    } else {
        // Calculate the sum
        const sum = num1 + num2;
        // Display the result
        alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
    }
});

// Function to calculate the product and display it
function calculateProduct() {
    // Ask the user to enter two numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
    } else {
        // Calculate the product
        let product = num1 * num2;

        // Display the result in the paragraph with id "result"
        document.getElementById("result").innerText = "The product of " + num1 + " and " + num2 + " is: " + product;
    }
}
