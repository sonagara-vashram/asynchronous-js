
# **What is async/await?**

`async/await` is a modern and more readable way to handle asynchronous code in JavaScript. It provides a better alternative to promises, allowing developers to write asynchronous code that appears synchronous.

With `async/await`, there is no need to chain `.then()` and `.catch()` methods, reducing nested structures and improving code clarity.

## **How async works**

- Declaring a function with the `async` keyword makes it return a **Promise**.
- Inside an `async` function, the `await` keyword can be used to wait for a promise to resolve.

Example:

```javascript
async function fetchData() {
  return "Data fetched!";
}
```

The above function returns a promise that resolves with `"Data fetched!"`.

### **How await works**

- `await` pauses the execution of the async function until the promise resolves or rejects.
- The promise’s resolved value gets stored in a variable.

Example:

```javascript
let result = await promise;
```

### **Error Handling in async/await**

Use `try-catch` blocks to handle errors from promises inside async functions.

Example:

```javascript
async function getData() {
  try {
    let result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### **Advantages of async/await**

1. **Improved Readability**: Code looks synchronous and is easier to understand.
2. **Better Error Handling**: Using `try-catch` simplifies error management.
3. **No Callback Hell**: Avoids deeply nested callbacks.
4. **Control over Execution**: Supports both sequential and parallel execution.

### **Disadvantages**

1. **Browser Compatibility**: Older browsers do not support async/await.
2. **Debugging Challenges**: Tracking async code during debugging can be tricky.
