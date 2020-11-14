import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAmpsieOTRIQVYejReHbCebmfYt04Oojv4",
  authDomain: "tampakan-2020.firebaseapp.com",
  databaseURL: "https://tampakan-2020.firebaseio.com",
  projectId: "tampakan-2020",
  storageBucket: "tampakan-2020.appspot.com",
  messagingSenderId: "905829995229",
  appId: "1:905829995229:web:0f2233dbb923b0b457c134",
  measurementId: "G-546B7FSY0J"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;