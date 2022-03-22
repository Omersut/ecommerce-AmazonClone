import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHe4yY0TaLTdm9Z4kj2FVqmmLVlA_n3mw",
  authDomain: "clone-aa36b.firebaseapp.com",
  projectId: "clone-aa36b",
  storageBucket: "clone-aa36b.appspot.com",
  messagingSenderId: "414599391020",
  appId: "1:414599391020:web:5ab0377dd34a4009d6ae89",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
