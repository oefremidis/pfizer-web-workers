
// step 2 -- get a message and send it to all other windows/tabs

const browserInstances = [];

const messages = [];

onconnect = function (e) {

    const port = e.ports[0];

    // store the newly connected browser instance
    // its length is the number of active connections
    browserInstances.push(port);


    port.onmessage = function (event) {

        const message = event.data;

        // store or manipulate the message
        // e.g. store it to messages array
        messages.push(message);

        // post message to all browser instances
        browserInstances.forEach(instance => {
            // if (instance != port)
                instance.postMessage(message);
        });
    }

}


// step 1 - Simple example

// const messages = [];

// onconnect = function (e) {

//     const port = e.ports[0];

//     port.onmessage = function (event) {
//         const message = event.data;

//         // store/manipulate your message
//         messages.push(message);

//         // post message back out to your application
//         port.postMessage(messages);
//     }
// }

