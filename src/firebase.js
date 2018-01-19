
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3RT9dGPTVDtxeqdBSkJtO8WN3epjrnjE",
    authDomain: "fir-37152.firebaseapp.com",
    databaseURL: "https://fir-37152.firebaseio.com",
    projectId: "fir-37152",
    storageBucket: "fir-37152.appspot.com",
    messagingSenderId: "505773939781"
};
firebase.initializeApp(config);


export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
