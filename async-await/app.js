
// Example: Simulating an asynchronous operation using Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data successfully fetched!");
      }, 2000);
    });
  }
  
  // Async function using await to handle the promise
  async function getData() {
    console.log("Fetching data...");
    let result = await fetchData();  // Waiting for the promise to resolve
    console.log(result);  // Output: Data successfully fetched!
  }
  
  getData();
  
  // Error Handling with async/await using try-catch
  async function fetchWithErrorHandling() {
    try {
      let result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchWithErrorHandling();
  