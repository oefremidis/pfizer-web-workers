// ---------------------------------------------
// Step 3
onmessage = (message) => {
  // console.log(message)
  // console.log(typeof message.data)  // parse it

  let sum = 0;
  // for (let i = 0; i < 10e9; i++) { // for Step 2
  for (let i = 0; i < parseInt(message.data); i++) {
    sum += i;
  }

  postMessage(sum);
}

// stop the worker
// discards any tasks awaiting processing and
// prevents further events being queued
// self.close()


// ---------------------------------------------
// Step 2
// or
// self.onmessage = () ....

// onmessage = () => {

//   let sum = 0;
//   for (let i = 0; i < 10e9; i++) {
//     sum += i;
//   }

//   postMessage(sum);
// }