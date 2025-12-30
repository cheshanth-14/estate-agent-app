import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJdlytZt-RrHm8bcoXsPUlIGpJj3e1KFw",
  authDomain: "real-estate-agent-ec768.firebaseapp.com",
  projectId: "real-estate-agent-ec768",
  storageBucket: "real-estate-agent-ec768.firebasestorage.app",
  messagingSenderId: "793671662622",
  appId: "1:793671662622:web:ba11d2d979e32e67dc020f",
  measurementId: "G-KM7HYHSVHX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;