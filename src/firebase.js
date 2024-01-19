// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyDRDgv4iCTTKnmTx3qu8LBTKdv5Pq0VReY",
  authDomain: "cinema-planet-47e82.firebaseapp.com",
  projectId: "cinema-planet-47e82",
  storageBucket: "cinema-planet-47e82.appspot.com",
  messagingSenderId: "842175281660",
  appId: "1:842175281660:web:b240e15e9a12b932db1a79",
  measurementId: "G-6CRZ7K6BR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;