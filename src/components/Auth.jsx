import React from 'react';
import '../assets/styles/components/Auth.scss';
import firebase from "firebase/app";
import "firebase/auth";
import IconGoogle from '../assets/static/IconGoogle.png';
import { CerrarModal } from './Header';


// Docs: https://source.corp.google.com/piper///depot/google3/third_party/devsite/firebase/en/docs/auth/web/google-signin.md

function googleProvider() {
  // [START auth_google_provider_create]
  var provider = new firebase.auth.GoogleAuthProvider();
  // [END auth_google_provider_create]

  // [START auth_google_provider_scopes]
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  // [END auth_google_provider_scopes]
  
  // [START auth_google_provider_params]
  // provider.setCustomParameters({
  //   'login_hint': 'user@example.com'
  // });
  // [END auth_google_provider_params]
  //Popup method///////////////////////////////////////////////////////////////////
  // firebase.auth().signInWithPopup(provider).then((result) => {
    
  //   // /** @type {firebase.auth.OAuthCredential} */
  //   var credential = result.credential;
    
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  //   console.log(errorMessage, errorCode, credential)
  // });
  ////////////////////////////////////////////
  //Redirect method ////////////////////////////////////////////////////////////////////
  firebase.auth().signInWithRedirect(provider);
  
}
function authStateListener() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
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
        }
        // The signed-in user info.
        var user = result.user;
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    // [END auth_google_signin_redirect_result]
  }
  function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  // [END auth_google_signin_popup]
}

function googleBuildAndSignIn(id_token) {
  // [START auth_google_build_signin]
  // Build Firebase credential with the Google ID token.
  var credential = firebase.auth.GoogleAuthProvider.credential(id_token);

  // Sign in with credential from the Google user.
  firebase.auth().signInWithCredential(credential).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  // [END auth_google_build_signin]
}

// [START auth_google_callback]
function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
  
      // Sign in with credential from the Google user.
      // [START auth_google_signin_credential]
      firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      // [END auth_google_signin_credential]
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}
// [END auth_google_callback]

// [START auth_google_checksameuser]
function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}
function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}
const Auth = () => {
    return(
        <div id='Principal'>
          <h3 id='EncP'>Inicia sesión con alguna de las formas siguientes</h3>
            <div id='LoginWithtEmail'>
                <h4 id='Enc'>Acceder con correo</h4>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id='password' />
                <button id='LoginWithtEmailButton' >Iniciar sesion</button>
            </div>
            <div id='LoginWithSocial'>
            <button onClick={googleProvider} id='SigInGoogle' className='SocialMedia'><img id='LGoogle' src={IconGoogle} type='img/png'/> <h4>Acceder con Google</h4></button > 
        </div>
        <button id='cerrarModal'onClick={CerrarModal}>Cerrar</button> 
        </div>
    )
};


export default Auth;