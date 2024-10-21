// Promise Example
let fetchData = new Promise(function(resolve, reject) {
    // Simulate an asynchronous task (e.g., fetching data from API)
    setTimeout(() => {
        const dataFetched = true;  // Simulated success
        if (dataFetched) {
            resolve("Data successfully fetched!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000);
});

// Handling the promise result
fetchData
    .then(function(result) {
        console.log(result);  // When promise is resolved
    })
    .catch(function(error) {
        console.error(error);  // When promise is rejected
    });

// Promise Chaining Example
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(10), 1000);  // Resolve after 1 second
});

promise
    .then(result => {
        console.log(result);  // Output: 10
        return result * 2;    // Multiply by 2
    })
    .then(result => {
        console.log(result);  // Output: 20
        return result * 3;    // Multiply by 3
    })
    .then(result => {
        console.log(result);  // Output: 60
    })
    .catch(error => {
        console.error(error);  // If any promise fails, catch block will run
    });

// Promise.all Example
let promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 1000));
let promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 2000));
let promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 3000));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);  // ["Promise 1", "Promise 2", "Promise 3"]
    })
    .catch(error => {
        console.error(error);
    });

// Promise.race Example
let promiseFast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));
let promiseSlow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));

Promise.race([promiseFast, promiseSlow])
    .then(result => {
        console.log(result);  // "Fast"
    })
    .catch(error => {
        console.error(error);
    });
