import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Layout from '../components/Layout.jsx';
import NotFound from '../containers/NotFound.jsx';
import Maquinas from '../components/Maquinas.jsx';
import User from '../components/User.jsx';
import Especial from '../components/Especial.jsx';
import '../assets/styles/App.scss';
// import 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import Auth from '../components/Auth.jsx';

firebase.initializeApp({
    apiKey: "AIzaSyAKDUovEMCj_2yDeWnlcam0rxnD4zMopvs",
    // authDomain: "www.braco.space",
    authDomain: "bravo-react-0.firebaseapp.com",
    projectId: "bravo-react-0",
    storageBucket: "bravo-react-0.appspot.com",
    messagingSenderId: "400531528348",
    appId: "1:400531528348:web:0901490a4666e49f1feb59",
    measurementId: "G-W196JE55ZJ"
});

// const database = firebase.database();

document.addEventListener('DOMContentLoaded', (event) => {
  googleSignInRedirectResult()
    authStateListener()
    console.log("activo")
  });
//////////////////////////////////////////////
// Borrar un usuario
///////////////////////////////////////////
const BorrarP = () => {
  const user = firebase.auth().currentUser;

user.delete().then(() => {
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});
}
  
const UsuarioP = () => {
 const user = firebase.auth().currentUser;
 //////////////////////////////////////////////////////////
//  obtener el usuario que accedió
//////////////////////////////////////////////////////////
    // if (user) {
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/firebase.User
    //   const nombreUser = user.displayName;
    //   console.log(nombreUser)
     
    // } else {
    //   // No user is signed in.
    // }
//////////////////////////////////////////
// Obtén la información de perfil de un usuario de un proveedor específico
//////////////////////////////////////////
if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
////////////////////////////////////////////////////// 
// Obtén el perfil de un usuario   
//////////////////////////////////////////////////////
    // if (user !== null) {
    //       // The user object has basic properties such as display name, email, etc.
    //       const displayName = user.displayName;
    //       const email = user.email;
    //       const photoURL = user.photoURL;
    //       const emailVerified = user.emailVerified;
    //       console.log( displayName,email,photoURL,emailVerified)
        
    //       // The user's ID, unique to the Firebase project. Do NOT use
    //       // this value to authenticate with your backend server, if
    //       // you have one. Use User.getToken() instead.
    //       const uid = user.uid;
    //     }
    /////////////////////////////////////////////////////////////
    // Actualiza el perfil de un usuario
    /////////////////////////////////////////////////////////////
    // user.updateProfile({
    //   displayName: "Jane Q. User",
    //   photoURL: "https://example.com/jane-q-user/profile.jpg"
    // }).then(() => {
    //   // Update successful
    //   // ...
    // }).catch((error) => {
    //   // An error occurred
    //   // ...
    // });  
    ////////////////////////////////////////////////////
    // configurar correo
    ////////////////////////////////////////////////////////////
// user.updateEmail("user@example.com").then(() => {
//   // Update successful
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
}
   
    
    
    
    
const authStateListener = () => {
      // [START auth_state_listener]
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          console.log("uid:" + uid)
          // ...
        } else {
          // User is signed out
          // ...
        }
        
      });
  // [END auth_state_listener]
}

function googleSignInRedirectResult() {
  // [START auth_google_signin_redirect_result]
  firebase.auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // ...
        console.log("token:" + token)
      }
      // The signed-in user info.
      
        var user = result.user;
        console.log("user:" + user.displayName)
      
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    })
  };
const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Maquinas' component={Maquinas} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Especial' component={Especial} />
            <Route exact path='/Auth' component={Auth} />
            <Route component={NotFound} />
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App
export {authStateListener, UsuarioP}