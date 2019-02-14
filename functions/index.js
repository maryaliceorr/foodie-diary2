const functions = require('firebase-functions');


exports.addPicture = functions.https.onRequest((req, res) => {
    const pictureParameter = req.query.picture;

    return admin.database().ref('/pictures').push({ picture: picture })

    return res.redirect(303,)
})