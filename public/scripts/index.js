try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
} catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
}

var app = firebase.app();
var auth = firebase.auth();
var database = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
// You can add additional scopes to the provider:
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


// firebase.auth().languageCode = 'pt';
auth.useDeviceLanguage();

