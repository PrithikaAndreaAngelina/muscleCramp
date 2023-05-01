// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOLVgeWF9wlm9PZCl6KuT9AFBWtSllhqg",
  authDomain: "ainthan-ilaaj.firebaseapp.com",
  projectId: "ainthan-ilaaj",
  storageBucket: "ainthan-ilaaj.appspot.com",
  messagingSenderId: "646077174510",
  appId: "1:646077174510:web:cb53514d04ddb649ae59ff",
  measurementId: "G-XPMLKP4962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);