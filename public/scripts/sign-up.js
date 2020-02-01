function signUp() {

    var user = auth.currentUser;

    var organization = document.getElementById('organizationField').value;
    var project = document.getElementById('projectField').value;

    database.collection("users").add({
        userOriginalOrganization: organization,
        userOrganization: [organization],
        userOriginalProject: project,
        username: user.email,
        userGoogleemailVerified: user.emailVerified,
        userGoogleisAnonymous: user.isAnonymous,
        userId: user.uid,
        userProviderData: user.providerData
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        addOrganization();
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    function addOrganization() {
        database.collection("organizations").add({
            orgTitle: organization,
            orgOwner: user.uid,
            orgProjects: [project],
            orgUsers: [user.uid],
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            addProject(docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    function addProject(organizationId) {
        database.collection("projects").add({
            projTitle: project,
            projOriginalOrganization: organization,
            projOrganization: organization,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            redirectNewUser(organizationId, docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    
    function redirectNewUser(organizationId, projectId) {
        window.location.assign('/u/' + auth.currentUser.uid + '/o/' + organizationId + '/p/' + projectId + '/home');
    }
}