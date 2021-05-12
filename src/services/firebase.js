import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBhQ7cE27CeOrQSVbLx4-zUATvOCKc6Pc4",
  authDomain: "razors-578fe.firebaseapp.com",
  projectId: "razors-578fe",
  storageBucket: "razors-578fe.appspot.com",
  messagingSenderId: "837135017996",
  appId: "1:837135017996:web:918e18e872bd988b3ae629",
  measurementId: "G-7ZJM5QV3CF",
};
// Initialize Firebase
console.log("initializeApp", firebase);
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
