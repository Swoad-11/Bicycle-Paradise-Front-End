// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnRG86ayHfQAsv0teD1_FSPYaIzv6hiwg",
    authDomain: "bicycle-paradise.firebaseapp.com",
    projectId: "bicycle-paradise",
    storageBucket: "bicycle-paradise.appspot.com",
    messagingSenderId: "18972457343",
    appId: "1:18972457343:web:f7e781a395818192a4c24a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;