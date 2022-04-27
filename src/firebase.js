import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//v8에서 v9으로 변하면서 위에처럼 import해야됩니다. 정말... 겨우 찾았네요...

const firebaseConfig = {
    apiKey: "AIzaSyAMKM5Fe1XVSBiAjdJNcA4zpUWfF5XRM6E",
    authDomain: "test-44453.firebaseapp.com",
    projectId: "test-44453",
    storageBucket: "test-44453.appspot.com",
    messagingSenderId: "491700936486",
    appId: "1:491700936486:web:3be484482c68b93e2cabe7",
    measurementId: "G-PRY7LKST08"
};

export default firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();