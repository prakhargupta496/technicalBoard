import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCDn_GysUQCy5u8BOzMjA2iNtkWEB11-5Q",
    authDomain: "technical-board-e71f0.firebaseapp.com",
    projectId: "technical-board-e71f0",
    storageBucket: "technical-board-e71f0.appspot.com",
    messagingSenderId: "677666251300",
    appId: "1:677666251300:web:d4685a34683bb2b11d2eb1",
    measurementId: "G-6F6PK68NNY"
};

// Initialize Firebase
const backend = firebase.initializeApp(config, "Home");

export default backend;