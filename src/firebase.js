import * as firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAlro3RJLyJ_xIFLqYpDSYfZWpYtLCYniA",
    authDomain: "reydelsur-c2a0a.firebaseapp.com",
    databaseURL: "https://reydelsur-c2a0a.firebaseio.com",
    projectId: "reydelsur-c2a0a",
    storageBucket: "reydelsur-c2a0a.appspot.com",
    messagingSenderId: "106583468758"
};
firebase.initializeApp(config);


export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
