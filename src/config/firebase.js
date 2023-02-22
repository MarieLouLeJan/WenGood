import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbqOqGZM_-vAn7ojGVVBiWlw38lIPkpKY",
  authDomain: "wengoodproject.firebaseapp.com",
  projectId: "wengoodproject",
  storageBucket: "wengoodproject.appspot.com",
  messagingSenderId: "755503170016",
  appId: "1:755503170016:web:98a84b7555a699f64f2b85",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
