// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
    }
}

//Task 02: Awaiting a Call
async function awaitCall() {
    const simulatedFetch = () => new Promise(resolve => setTimeout(() => resolve("Fetched Data"), 2000)); // Simulate API call
    const data = await simulatedFetch();
    console.log(data);
}

// Task 03: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
    const simulatedFetch = () => new Promise((resolve, reject) => setTimeout(() => reject("API Call Failed"), 2000)); // Simulate API call failure
    try {
        const data = await simulatedFetch();
        console.log(data);
    } catch (error) {
        console.log("An error occurred: " + error);
    }
}

// Task 04: Chaining Async/Await
async function chainedAsyncFunctions() {
    const asyncFunction1 = () => new Promise(resolve => setTimeout(() => resolve(console.log("Function 1 done")), 1000));
    const asyncFunction2 = () => new Promise(resolve => setTimeout(() => resolve(console.log("Function 2 done")), 1000));
    const asyncFunction3 = () => new Promise(resolve => setTimeout(() => resolve(console.log("Function 3 done")), 1000));

    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    const simulatedFetch1 = () => new Promise(resolve => setTimeout(() => resolve("Fetched Data 1"), 2000));
    const simulatedFetch2 = () => new Promise(resolve => setTimeout(() => resolve("Fetched Data 2"), 2000));

    const [data1, data2] = await Promise.all([simulatedFetch1(), simulatedFetch2()]);
    console.log(data1, data2);
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const fetchFromUrl = url => new Promise(resolve => setTimeout(() => resolve(`Fetched data from ${url}`), 2000));

    const promises = urls.map(url => fetchFromUrl(url));
    const responses = await Promise.all(promises);
    console.log(responses);
}

// Example usage
//iterateWithAsyncAwait([1, 2, 3]);
//awaitCall();
//awaitCallWithErrorHandling();
//chainedAsyncFunctions();
concurrentRequests();
//parallelCalls(['url1', 'url2', 'url3']);
