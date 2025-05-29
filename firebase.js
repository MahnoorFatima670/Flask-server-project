const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json');  // Replace this with the correct path to your JSON file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;


