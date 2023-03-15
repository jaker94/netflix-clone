// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmwSJNMKvcvWZWN0t_UL8iW1-ONIp05r8",
    authDomain: "netlix-clone-648cd.firebaseapp.com",
    projectId: "netlix-clone-648cd",
    storageBucket: "netlix-clone-648cd.appspot.com",
    messagingSenderId: "667637100269",
    appId: "1:667637100269:web:40c926de026319e94566e4"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }