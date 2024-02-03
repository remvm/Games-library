import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBUqHIYQDHg1SDg9FxSKD_-h9sGyJToR8A",
  authDomain: "react-30-fcbcc.firebaseapp.com",
  projectId: "react-30-fcbcc",
  storageBucket: "react-30-fcbcc.appspot.com",
  messagingSenderId: "865729937058",
  appId: "1:865729937058:web:8c760168a9d173bb2661fb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }