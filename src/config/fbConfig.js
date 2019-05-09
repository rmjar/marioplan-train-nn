import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAw88YWLStP2LuiaUBDYvGj7G1kqEUXfIM",
    authDomain: "nn-mr-marioplan.firebaseapp.com",
    databaseURL: "https://nn-mr-marioplan.firebaseio.com",
    projectId: "nn-mr-marioplan",
    storageBucket: "nn-mr-marioplan.appspot.com",
    messagingSenderId: "743775692744"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;