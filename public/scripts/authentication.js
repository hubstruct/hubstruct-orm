auth.onAuthStateChanged(user => {
    if(user) {
        console.log('User is signed in');

        console.log(user.displayName);
        console.log(user.email);
        console.log(user.emailVerified);
        console.log(user.photoURL);
        console.log(user.isAnonymous);
        console.log(user.uid);
        console.log(user.providerData);

        var token = user.getIdToken();
        console.log(token);

        loadAccount(user.photoURL);
    } else {
        console.log('User is signed out');
        switch(window.location.pathname) {
            case '/sign-in':
              // code block
              break;
            case '/other-example':
              // code block
              break;
            default:
                window.location.assign('/sign-in');
          }
      } 
});
