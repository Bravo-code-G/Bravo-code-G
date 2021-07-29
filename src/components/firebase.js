import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyASAhUdk8khQQOvhF-iGGc0v46Tm3cU4BM',
  authDomain: 'braco-react.firebaseapp.com',
  projectId: 'braco-react',
  storageBucket: 'braco-react.appspot.com',
  messagingSenderId: '110286809430',
  appId: '1:110286809430:web:d371aff8511fc04e5fcef7',
  measurementId: 'G-F39LT8ZZ2H',
};

const fb = firebase.initializeApp(firebaseConfig);

const FireApp = () => fb;

export const DataFiree = fb.firestore();

export { FireApp };
