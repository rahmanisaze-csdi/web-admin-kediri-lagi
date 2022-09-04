// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyAPu6HLqkMsG4WRslPrTWZ2nqb1knrKvJ0",
  authDomain: "admin-kediri-lagi.firebaseapp.com",
  databaseURL: "https://admin-kediri-lagi.firebaseio.com",
  projectId: "admin-kediri-lagi",
  storageBucket: "admin-kediri-lagi.appspot.com",
  messagingSenderId: "188124876883",
  appId: "1:188124876883:web:4e0dac4a243e22608276a6",
  measurementId: "G-VSMDB0T8XR"
};
// Initialize Firebase
const fb = firebase.initializeApp(config);

const db = firebase.database().ref();

export {fb,db}
