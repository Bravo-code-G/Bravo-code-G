import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../containers/Home';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import MaquinasCarrusel from '../components/MaquinasCarrusel';
import User from '../components/User';
import Especial from '../components/Especial';
import '../assets/styles/App.scss';
// eslint-disable-next-line import/order
import firebase from 'firebase/app';
import { FireApp } from '../components/firebase';
import 'firebase/auth';
// import 'firebase/firestore';
import { authStateListener, informacionUserAuth } from '../components/AuthMethods';
// import 'firebase/database';
import Auth from '../components/Auth';
import { authStateListenerAcceso } from '../components/ListenerAuth';
import { AuthContextProvider } from '../components/AuthContext';
import GuardRoute from '../components/GuardRoute';
import Root from '../components/Root';
import MaquinaSelect from '../components/MaquinaSelect';

FireApp();

// eslint-disable-next-line no-unused-vars
document.addEventListener('DOMContentLoaded', (event) => {
  // eslint-disable-next-line no-use-before-define
  googleSignInRedirectResult();
  authStateListenerAcceso((user) => {
    // console.log(user);
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
        // console.log(`token:${token}`);
      }
      // The signed-in user info.
      const { user } = result;
      // console.log(`user:${user.displayName}`);
    }).catch((error) => {
      // Handle Errors here.
      // eslint-disable-next-line no-unused-vars
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.message;
      // The email of the user's account used.
      // eslint-disable-next-line no-unused-vars
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      // eslint-disable-next-line no-unused-vars
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
            <GuardRoute type='private' exact path='/Maquinas/:idDeElement' component={MaquinaSelect} />
            <GuardRoute type='private' exact path='/Maquinas' component={MaquinasCarrusel} />
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
