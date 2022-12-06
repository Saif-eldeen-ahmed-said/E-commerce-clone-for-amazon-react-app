import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCFuqR0x2NXM55yfFF1wHfeoGE7dJfin0g",
  authDomain: "cl-login-auth.firebaseapp.com",
  projectId: "cl-login-auth",
  storageBucket: "cl-login-auth.appspot.com",
  messagingSenderId: "581313388446",
  appId: "1:581313388446:web:eb933dd6c3b68655b3808f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default getFirestore()



