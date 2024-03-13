
const worker = new SharedWorker('sharedWorker.js');

// receive from worker...
worker.port.onmessage = function (event) {
  const message = event.data;
  console.log(message)
}



// send to worker...
// worker.port.postMessage('Welcome...');
const button = document.querySelector('button')
button.onclick = () => {
  const input = document.querySelector('input')
  worker.port.postMessage(input.value);
}