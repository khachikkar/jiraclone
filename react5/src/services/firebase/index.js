// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAStpy5lPXkAj8AdTq95XBumRZOFEG4L0o",
  authDomain: "jira-c10d1.firebaseapp.com",
  databaseURL: "https://jira-c10d1-default-rtdb.firebaseio.com",
  projectId: "jira-c10d1",
  storageBucket: "jira-c10d1.appspot.com",
  messagingSenderId: "871275944964",
  appId: "1:871275944964:web:c4271e64aeb48c701e2951",
  measurementId: "G-YS5P2MPLTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export{
    auth
}
