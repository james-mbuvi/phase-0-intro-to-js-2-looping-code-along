// index.js

// Function to generate thank you messages for each name provided
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a provided number and log each number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Export the functions for testing purposes
  module.exports = {
    writeCards,
    countDown,
  };