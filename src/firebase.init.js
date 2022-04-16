// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC09t4C0KpOFC4mLuGAbO8U8LSQo7zqxMo",
    authDomain: "purpose-coach-website.firebaseapp.com",
    projectId: "purpose-coach-website",
    storageBucket: "purpose-coach-website.appspot.com",
    messagingSenderId: "13245439194",
    appId: "1:13245439194:web:a707a896c361c764c659e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;