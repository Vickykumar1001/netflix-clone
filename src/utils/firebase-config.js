import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig =process.env.FIREBASE;

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);