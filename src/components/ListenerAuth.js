import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from "firebase";
import '../assets/styles/App.scss';

let acceso

const authStateListenerAcceso = (callback) => {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log("acceso:" + uid)
        callback({
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
        })
       return user = true
        // ...
      } else {
        // User is signed out
        // ...
       
        console.log("no acceso");
        callback(null);

      }
      
    });
// [END auth_state_listener]
}



 export {authStateListenerAcceso}; 