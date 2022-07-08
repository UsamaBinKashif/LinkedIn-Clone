import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZN2ewn_zythuRFFmGN_o957O24jXQ9Pw",
    authDomain: "linkdin-clone-89763.firebaseapp.com",
    projectId: "linkdin-clone-89763",
    storageBucket: "linkdin-clone-89763.appspot.com",
    messagingSenderId: "644538713905",
    appId: "1:644538713905:web:7733f12b265a8612b7d210"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}