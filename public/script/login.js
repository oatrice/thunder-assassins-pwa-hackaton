var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();
var database = firebase.database();
var storage = firebase.storage();

function onSignInGoogleButtonClick() {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        console.log(result);
        var user = firebase.auth().currentUser;
        writeUserData(user.uid, user.displayName, user.email, FirebaseAuth.getInstance().getCurrentUser().getPhotoUrl());
    }).catch(function(error) {});
}

function onSignInFacebookButtonClick() {
    firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
        console.log(result);
        var user = firebase.auth().currentUser;
        writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    }).catch(function(error) {});
}

function writeUserData(userId, name, email, imageUrl) {
    database.ref('users/' + userId).set({
        name: name,
        email: email,
        profile_picture: imageUrl
    });

    var storageRef = storage.ref();
    var imagesRef = storageRef.child('user-image/' + userId);

    var blob = dataURItoBlob(imageUrl);

    imagesRef.put(blob).then(function(snapshot) {
        console.log(snapshot);
    });
}