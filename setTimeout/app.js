// Example: Using setTimeout()

console.log("Start");

setTimeout(() => {
  console.log("This message appears after 2 seconds.");
}, 2000);

console.log("End");

// Example: Canceling setTimeout() with clearTimeout()

let timeoutID = setTimeout(() => {
  console.log("This message won't appear.");
}, 3000);

clearTimeout(timeoutID);  // Cancels the setTimeout

// Real-World Use Case: Delayed API Call Simulation

function fetchData() {
  console.log("Fetching data...");

  setTimeout(() => {
    console.log("Data fetched after 3 seconds.");
  }, 3000);  // 3 second delay for fetching data
}

fetchData();
