import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Layout from '../components/Layout.jsx';
import NotFound from '../containers/NotFound.jsx';
import MaquinasCarrusel from '../components/MaquinasCarrusel';
import User from '../components/User.jsx';
import Especial from '../components/Especial.jsx';
import '../assets/styles/App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import Auth from '../components/Auth';
import { authStateListenerAcceso } from '../components/ListenerAuth';
import { AuthContextProvider } from '../components/AuthContext';
import GuardRoute from '../components/GuardRoute';
import Root from '../components/Root';

const FireApp = () => {
  return firebase.initializeApp({
    apiKey: 'AIzaSyAKDUovEMCj_2yDeWnlcam0rxnD4zMopvs',
    // authDomain: "www.braco.space",
    authDomain: 'bravo-react-0.firebaseapp.com',
    projectId: 'bravo-react-0',
    storageBucket: 'bravo-react-0.appspot.com',
    messagingSenderId: '400531528348',
    appId: '1:400531528348:web:0901490a4666e49f1feb59',
    measurementId: 'G-W196JE55ZJ',
  });
};
FireApp();
document.addEventListener('DOMContentLoaded', (event) => {
  googleSignInRedirectResult();
  authStateListenerAcceso((user) => {
    console.log(user);
  });
  console.log('activo');
});

function googleSignInRedirectResult() {
  // [START auth_google_signin_redirect_result]
  firebase.auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // ...
        console.log(`token:${token}`);
      }
      // The signed-in user info.
      const { user } = result;
      console.log(`user:${user.displayName}`);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
      // ...
    });
};

const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Layout>
        <Root>
          <Switch>
            <GuardRoute type={'public' & 'private'} exact path='/' component={Home} />
            <GuardRoute type='private' exact path='/MaquinasCarrusel' component={MaquinasCarrusel} />
            <GuardRoute type='private' exact path='/User' component={User} />
            <GuardRoute type='private' exact path='/Especial' component={Especial} />
            <GuardRoute type='private' exact path='/Auth' component={Auth} />
            <GuardRoute component={NotFound} />
          </Switch>
        </Root>
      </Layout>
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;
export { FireApp };
