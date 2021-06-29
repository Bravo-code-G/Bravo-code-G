import firebase from "firebase/app";
import "firebase/auth";
const AbrirModal = () => {
    const modalIniciar = document.getElementById('modalIniciar');
    modalIniciar.style.cssText = 'visibility: visible; opacity: 100%;transition-duration2s;'
}
const CerrarModal = () => {
    const modalIniciar = document.getElementById('modalIniciar');
    modalIniciar.style.cssText = 'visibility: hidden; opacity: 0%;transition-duration2s;'
}
function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("logout")
    }).catch((error) => {
      // An error happened.
    });
    // [END auth_sign_out]
  }

export {AbrirModal, CerrarModal, signOut};