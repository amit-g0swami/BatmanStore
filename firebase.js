import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDg5ALiKWCAEy9NWsWr-AE8MYQP5gE5uE",
    authDomain: "superapp-reactnative.firebaseapp.com",
    projectId: "superapp-reactnative",
    storageBucket: "superapp-reactnative.appspot.com",
    messagingSenderId: "533480964040",
    appId: "1:533480964040:web:5dc9a742c3f2d0d6d74afd",
    measurementId: "G-VZJ4GNR3Q6"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }