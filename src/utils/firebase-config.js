import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxgIet_96WGyn8DGfufNzWx9-ropj5hfE",
  authDomain: "netflix-1001.firebaseapp.com",
  projectId: "netflix-1001",
  storageBucket: "netflix-1001.appspot.com",
  messagingSenderId: "216395398612",
  appId: "1:216395398612:web:eba0e1c17992654c45aa41",
  measurementId: "G-YXBB18WN50"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);