import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBkUPQVT1KGHd9FdCnALFNQTEejmpexF9A",
    authDomain: "crwn-db-54d3b.firebaseapp.com",
    projectId: "crwn-db-54d3b",
    storageBucket: "crwn-db-54d3b.appspot.com",
    messagingSenderId: "1012753607612",
    appId: "1:1012753607612:web:c2c39c744eca68c0d819b9",
    measurementId: "G-98313S72KC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;