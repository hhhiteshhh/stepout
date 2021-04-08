import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzV8AWwKF_hLDy9kB7_PARMpb-NyjYSQI",
    authDomain: "step-out-hs.firebaseapp.com",
    databaseURL: "https://step-out-hs.firebaseio.com",
    projectId: "step-out-hs",
    storageBucket: "step-out-hs.appspot.com",
    messagingSenderId: "628557094293",
    appId: "1:628557094293:web:8c4bb1b1c081f61ae2aa9c",
    measurementId: "G-4WHZKTJ442"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };