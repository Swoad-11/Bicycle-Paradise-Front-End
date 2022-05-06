// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRGry8nOvIN_Q3OUJD9vRIzV3VUOANbww",
    authDomain: "bicycle-warehouse-d7cbc.firebaseapp.com",
    projectId: "bicycle-warehouse-d7cbc",
    storageBucket: "bicycle-warehouse-d7cbc.appspot.com",
    messagingSenderId: "121707595593",
    appId: "1:121707595593:web:53aef07ac6ce130e403c98",
    measurementId: "G-79MTR3GENY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;