import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMoPfQY7id5mzH7yIuNgLcaXLeGvogZUo",
  authDomain: "linked-in-clone-519e7.firebaseapp.com",
  projectId: "linked-in-clone-519e7",
  storageBucket: "linked-in-clone-519e7.appspot.com",
  messagingSenderId: "726149236832",
  appId: "1:726149236832:web:93b8a1519f508e0684db05",
  measurementId: "G-NDTX3K09YV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
