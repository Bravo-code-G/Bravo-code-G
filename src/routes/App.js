import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Layout from '../components/Layout.jsx';
import NotFound from '../containers/NotFound.jsx';
import Maquinas from '../components/Maquinas.jsx';
import User from '../components/User.jsx';
import Especial from '../components/Especial.jsx';
import '../assets/styles/App.scss';
import 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import TestAuth from '../components/TestAuth.jsx'

firebase.initializeApp({
    apiKey: "AIzaSyAKDUovEMCj_2yDeWnlcam0rxnD4zMopvs",
    authDomain: "bravo-react-0.firebaseapp.com",
    projectId: "bravo-react-0",
    storageBucket: "bravo-react-0.appspot.com",
    messagingSenderId: "400531528348",
    appId: "1:400531528348:web:0901490a4666e49f1feb59",
    measurementId: "G-W196JE55ZJ"
});
const database = firebase.database();

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Maquinas' component={Maquinas} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Especial' component={Especial} />
            {/* <Route exact path='/TestAuth' component={TestAuth} /> */}
            <Route component={NotFound} />
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;
