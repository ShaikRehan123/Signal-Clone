import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC8jAWzQimS8arT3P--S4YzctKkO9QcubQ",
    authDomain: "chat-app-clone-4e43c.firebaseapp.com",
    projectId: "chat-app-clone-4e43c",
    storageBucket: "chat-app-clone-4e43c.appspot.com",
    messagingSenderId: "895706965092",
    appId: "1:895706965092:web:7eef5072cf60f9c5caeb71",
    measurementId: "G-RZC7L4BLG0"
};
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db , auth};