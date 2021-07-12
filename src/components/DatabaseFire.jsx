import React, {useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref(`users/${userId}`).set({
    username: name,
    email,
    profile_picture: imageUrl,
  });
}

const DatabaseFire = () => {


  return(


  )
}

export default DatabaseFire;