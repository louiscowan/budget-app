import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBynYZBu4a_en1ufwbMhlC7tH_chg5bb1c",
  authDomain: "budget-app-ecc62.firebaseapp.com",
  projectId: "budget-app-ecc62",
  storageBucket: "budget-app-ecc62.appspot.com",
  messagingSenderId: "1077952716621",
  appId: "1:1077952716621:web:61d4837e8e018860ece104",
  measurementId: "G-6YCEP4RJ1F"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
const analytics = getAnalytics(app);