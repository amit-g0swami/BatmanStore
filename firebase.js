import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCKLNzfosp7tFIVf4dd_PWSeGWU4jv0DMo",
    authDomain: "batmanstore-d5c20.firebaseapp.com",
    databaseURL: "https://batmanstore-d5c20-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "batmanstore-d5c20",
    storageBucket: "batmanstore-d5c20.appspot.com",
    messagingSenderId: "903023091845",
    appId: "1:903023091845:web:a7c65763857060b4e7c9ec",
    measurementId: "G-QJNKZJFRS1"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }