// Initialize the default app
var defaultApp = firebase.initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // "[DEFAULT]"

// You can retrieve services via the defaultApp variable...
var defaultStorage = defaultApp.storage();
var defaultDatabase = defaultApp.database();

// ... or you can use the equivalent shorthand notation
defaultStorage = firebase.storage();
defaultDatabase = firebase.database();

