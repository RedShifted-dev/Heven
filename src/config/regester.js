import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAN86FXea7z7CvUOA4L3XDcQKTaIEOdkn4",
  authDomain: "earth-17f6a.firebaseapp.com",
  projectId: "earth-17f6a",
  storageBucket: "earth-17f6a.firebasestorage.app",
  messagingSenderId: "830306598981",
  appId: "1:830306598981:web:188c93d03c8ef1c0de232c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'en';
export const provider = new GoogleAuthProvider();

