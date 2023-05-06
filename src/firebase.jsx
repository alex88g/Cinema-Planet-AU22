// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyAv1r605sBdg8eT0HW1QIl9PQp2B94jdCs",
  authDomain: "cinema-planet-au22.firebaseapp.com",
  projectId: "cinema-planet-au22",
  storageBucket: "cinema-planet-au22.appspot.com",
  messagingSenderId: "789640543549",
  appId: "1:789640543549:web:06a66e2d4c5dea9cd95954",
  measurementId: "G-VBXVSYDT9C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth};