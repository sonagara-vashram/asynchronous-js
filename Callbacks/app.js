// Callback Function Example
function fetchData(callback) {
    console.log("Fetching data...");

    // Simulate asynchronous operation (e.g., API call)
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' }; // Simulated data
        callback(data); // Call the callback function after data is "fetched"
    }, 2000); // 2-second delay
}

function displayData(data) {
    console.log("Data received: ", data);
}

// Call fetchData and pass displayData as a callback
fetchData(displayData);

// Error-First Callback Example
function fetchDataWithError(callback) {
    setTimeout(() => {
        const error = false; // Simulate no error
        const data = { id: 1, name: "John Doe" };

        if (error) {
            callback("Error occurred", null);
        } else {
            callback(null, data);
        }
    }, 2000);
}

fetchDataWithError(function(err, data) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Fetched Data:", data);
    }
});
