import firebase from 'firebase/app';
import 'firebase/auth';

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
};

const informacionUserAuth = () => {
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
  // if (user !== null) {
  //   user.providerData.forEach((profile) => {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);
  //   });
  // }else {
  //   console.log("No ahi usuario autenticado para mostrar datos")
  // }
  //////////////////////////////////////////////////////
  // Obtén el perfil de un usuario
  //////////////////////////////////////////////////////
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const { displayName } = user;
    const { email } = user;
    const { photoURL } = user;
    const { emailVerified } = user;
    console.log(displayName, email, photoURL, emailVerified);

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    return user;
  }else {
    console.log('sin usuario')
  }
  // console.log(user);
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
};
const authStateListener = () => {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const userInfo = user;
      console.log(`Name:${userInfo.displayName}`);
      // return userInfo;
      // ...
    }else{
      console.log('No ahi usuario autenticado');
    // User is signed out
    // ...
    }
    

  });
  // [END auth_state_listener]
};

export { informacionUserAuth, authStateListener};
