import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

	apiKey: "AIzaSyAJ6VcO-O-qHDPdQHjKHV6SW2r8e1jEx34",
    authDomain: "fir-b0921.firebaseapp.com",
    databaseURL: "https://fir-b0921.firebaseio.com",
    projectId: "fir-b0921",
    storageBucket: "fir-b0921.appspot.com",
    messagingSenderId: "368875235885",
    appId: "1:368875235885:web:186013cc2d4befdedce6a4",
    measurementId: "G-VNLXZJ80N5"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};