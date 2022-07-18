// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4YyraQRqkrbzDdAIjElk5nRMDXv0Nz6s",
  authDomain: "wazobia-project.firebaseapp.com",
  projectId: "wazobia-project",
  storageBucket: "wazobia-project.appspot.com",
  messagingSenderId: "663127112907",
  appId: "1:663127112907:web:cdbd0d5f1bd917840faf4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app