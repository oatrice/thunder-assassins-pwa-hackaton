var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();

function onSignInGoogleButtonClick() {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        console.log(result);
        //Do something when login complete
    }).catch(function(error) {
        //Do something when error
    });
}

function onSignInFacebookButtonClick() {
    firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
        console.log(result);
        //Do something when login complete
    }).catch(function(error) {
        //Do something when error
    });
}