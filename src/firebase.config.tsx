
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA84hKvuhu0SvDYUBvlqjQuoW0hqGm3aU",
  authDomain: "travelproject-52326.firebaseapp.com",
  projectId: "travelproject-52326",
  storageBucket: "travelproject-52326.appspot.com",
  messagingSenderId: "648884386162",
  appId: "1:648884386162:web:dc0bbad4862c41fcf605eb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth }