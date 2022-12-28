import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig );
// export const googleAuthProvider = new GoogleAuthProvider();
