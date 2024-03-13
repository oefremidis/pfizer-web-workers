const add = document.getElementById('add');
const toggle = document.getElementById('toggle');
const body = document.body;

const upper = document.querySelector('input[type=number]');

// ---------------------------------------------
// Step 2 - Add worker
const worker = new Worker('./worker.js');

add.onclick = () => {
  // Step 2 - Send a message
  // worker.postMessage('');

  // -------------------------------------------
  // Step 3 
  // send the input value to the worker
  worker.postMessage(upper.value);

  // -------------------------------------------
  // Step 1
  // without using workers - it blocks

  //   let sum = 0;
  //   for (let i = 0; i < 10e9; i++) {
  //     sum += i;
  //   }
  //   console.log(sum);

};

// receive a message from the worker
worker.onmessage = (message) => {
  console.log(message);
}

// filename: the name of the script which caused the error;
// lineno: the line number where the error occurred; and
// message: a description of the error.
worker.onerror = function (e) {
  console.log("Error in file: " + e.filename + "nline: " + e.lineno + "nDescription: " + e.message);
};


// ---------------------------------------------

toggle.onclick = () => {
  body.style.backgroundColor = body.style.backgroundColor == 'lightblue' ? 'lightcoral' : 'lightblue';
};


------------------------------