import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ0xTSE0cTKV-RtYGSIVc2c3JUqWgd6B0",
    authDomain: "jerins-parlour-15d2a.firebaseapp.com",
    projectId: "jerins-parlour-15d2a",
    storageBucket: "jerins-parlour-15d2a.appspot.com",
    messagingSenderId: "514850510628",
    appId: "1:514850510628:web:815ff33fe02a83246e05b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;