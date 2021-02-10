### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  * Promise
  * async/await
  * callback
- What is a Promise?
  > Promise is an object that you will get and it is eather going to between
  > fufild with the data we requested or rejected with reason why 
  >
  > Promise have 3 states rejected pending and fufild
- What are the differences between an async function and a regular function?
  > async functions return a promise
- What is the difference between Node.js and Express.js?
  > Node.js is the place where you can run javascript that is not brouser
  > Express.js is a framework like Flask and it runs on node.js.
- What is the error-first callback pattern?
  > When ever a error ocures in a rout and we pass the error to next callback
  >
  > it will search for the first app.use that haves error as  the first argument
- What is middleware?
  > A middleware is a function that can run before every request or before spceific
  >
  > request that have the midleware as a second argoment after the route and before the handler
- What does the `next` function do?
  > the next function goes to the next route that matches the requested route.
  > unless error is passed in then it goes to the first rout that haves error as argument
- What does `RETURNING` do in SQL? When would you use it?

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  * it is not dinamic and it wil return the same users every time
  * matt cannot begin procesing before elie and joel have bean procesed
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
