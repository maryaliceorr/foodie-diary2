const functions = require('firebase-functions');

exports.onFileChange = functions.storage.object().onChange(event => {

    console.log(event);
    return;
});