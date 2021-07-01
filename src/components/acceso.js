import firebase from "firebase";
 var x;
const authStateListenerAcceso = () => {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log("acceso:" + uid)
        x = uid
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no acceso");
      }
      
    });
// [END auth_state_listener]
}

console.log("para" + x);
 export {authStateListenerAcceso}
 