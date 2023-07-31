import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBi_fBnIKAx5rYOe3wKxUsmqY8vC5eesG4",
  authDomain: "e-ride-9d152.firebaseapp.com",
  projectId: "e-ride-9d152",
  storageBucket: "e-ride-9d152.appspot.com",
  messagingSenderId: "1071524908255",
  appId: "1:1071524908255:web:0b275c0cd89ad0946fad6a",
  // measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
