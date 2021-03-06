const fetch = require('node-fetch');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


//gets url of image and converts into base 64 code
exports.dataImage = functions.https.onRequest((req, res) => {
  console.log("Getting the image at "+req.body);
  return fetch(req.body).then(response => response.buffer()).then( buffer => {
    return res.status(200).send(buffer);
  }).catch( err => {
    console.log(err);
    return err;
  })
});
