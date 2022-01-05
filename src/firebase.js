import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3Wf1c_WJX0xV3VlzarkBkKZ_hmVZv528",
    authDomain: "linkedin-clone-29c95.firebaseapp.com",
    projectId: "linkedin-clone-29c95",
    storageBucket: "linkedin-clone-29c95.appspot.com",
    messagingSenderId: "897804413009",
    appId: "1:897804413009:web:4fd4e4e415d9d584807070"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;