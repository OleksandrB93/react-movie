import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
// const API_KEY = import.meta.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyBcxIB9nf4ACBEhvYN3RBlqhCAfnY4es_w",
  authDomain: 'moviestateauth.firebaseapp.com',
  projectId: 'moviestateauth',
  storageBucket: 'moviestateauth.appspot.com',
  messagingSenderId: '550743049618',
  appId: '1:550743049618:web:0d9328293406459a062d4b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
