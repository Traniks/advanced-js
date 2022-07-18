setTimeout(() => console.log("timeout"));

Promise.resolve()
    .then(() => console.log("promise"));

queueMicrotask(() => console.log("wow"));


Promise.resolve()
    .then(() => console.log("promise"));

console.log("code");