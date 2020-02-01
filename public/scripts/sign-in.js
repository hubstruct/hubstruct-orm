auth.getRedirectResult().then(function(result) {

    var user = result.user;

    if(user !== null) {

        database.collection("users").where("userId", '==', user.uid) 
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                window.location.assign('/u/' + user.uid + '/home');
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
            window.location.assign('/sign-up');
        });
    } else {
        console.log('Not Redirected')
    }

}, function(error) {

var email = error.email;

if (error.code === 'auth/account-exists-with-different-credential') {
    auth.fetchSignInMethodsForEmail(email).then(function(providers) {
        console.log(providers)
    })
    }
});

var signIn = function() {
    auth.signInWithRedirect(provider)
}
