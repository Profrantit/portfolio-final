import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDgvBiqdYLM1H4LLiuUA90q-KLM6PtxPK0",
  authDomain: "portfolio-e3519.firebaseapp.com",
  projectId: "portfolio-e3519",
  storageBucket: "portfolio-e3519.appspot.com",
  messagingSenderId: "352950924764",
  appId: "1:352950924764:web:a6afb3956f7b8c72ba0b19",
  measurementId: "G-6JRF1C5177"
});
var db = firebaseApp.firestore();

export { db };
