import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import '../assets/styles/App.scss';

const authStateListenerAcceso = (callback) => {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const { uid } = user;
      // console.log(`acceso:${uid}`);
      callback({
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
      });
      return user = true;
      // ...
    }
    // User is signed out
    // ...

    console.log('no acceso');
    callback(null);

  });
// [END auth_state_listener]
};

export { authStateListenerAcceso };
