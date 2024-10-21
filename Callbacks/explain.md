# Callback Functions in JavaScript

## What is a Callback Function?

A callback is a function that is passed as an argument to another function and is invoked when that function completes its execution. In JavaScript, callbacks are used to handle asynchronous tasks such as reading files, fetching data from APIs, or executing actions after a timeout.

## Why Do We Need Callbacks?

JavaScript primarily operates in a single-threaded environment, meaning only one task can be completed at a time. If tasks such as fetching data from an API or reading a file are executed directly, JavaScript will wait until those tasks are complete, blocking further execution. Callbacks solve this problem by allowing functions to be called after asynchronous tasks are completed, without blocking the entire execution.

## Callback Flow

1. A function is passed as an argument to another function.
2. When the first function completes its task, it calls the callback function.
3. The callback function handles the result of the asynchronous task, such as an API response or the completion of a file read operation.

## Example

```javascript
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
```

## Synchronous vs Asynchronous Callbacks

### 1. Synchronous Callback

Synchronous callbacks are executed immediately, without any asynchronous delay. For example, array methods like `map()`, `filter()`, and `forEach()` are synchronous.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
    console.log(num);
});
```

### 2. Asynchronous Callback

An asynchronous callback is called after completing an asynchronous task. For example, file reading, API calls, or timers (e.g., `setTimeout()`).

```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
```

## Error-First Callback Pattern

When handling asynchronous callbacks, error handling is crucial. Therefore, a standard pattern is followed called **Error-First Callback** where the first argument of the callback is the error, and the second is the result.

```javascript
function fetchData(callback) {
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

fetchData(function(err, data) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Fetched Data:", data);
    }
});
```

## Callback Hell (Pyramid of Doom)

When multiple callbacks are nested one after another, the code can become complex and hard to read. This situation is known as **"Callback Hell"** or **Pyramid of Doom**.

```javascript
setTimeout(() => {
    console.log("Step 1 completed.");
    setTimeout(() => {
        console.log("Step 2 completed.");
        setTimeout(() => {
            console.log("Step 3 completed.");
        }, 1000);
    }, 1000);
}, 1000);
```

## Conclusion

- Callback functions are essential for handling asynchronous operations.
- They are used when a task needs to execute another task after completion.
- Excessive nesting of callbacks can lead to **Callback Hell**, which can be resolved using promises or async/await.
