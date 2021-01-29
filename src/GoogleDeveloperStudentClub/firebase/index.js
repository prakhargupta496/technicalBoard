import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCi0QIE2M8JA1SLvbRmx0Z52h9lF2RLefg",
    authDomain: "developer-student-clubs.firebaseapp.com",
    projectId: "developer-student-clubs",
    storageBucket: "developer-student-clubs.appspot.com",
    messagingSenderId: "978218667605",
    appId: "1:978218667605:web:0367422822723332710edc",
    measurementId: "G-Z84CXXC6X3"
};

// Initialize Firebase
firebase.initializeApp(config, 'gdsc');


export default firebase;