import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBVa5ruN0JCWhPLNMZSN7A6Q2rGrF_PqiE",
  authDomain: "haggle-42441.firebaseapp.com",
  databaseURL: "https://haggle-42441.firebaseio.com",
  projectId: "haggle-42441",
  storageBucket: "haggle-42441.appspot.com",
  messagingSenderId: "660920593870",
  appId: "1:660920593870:web:f34e56f74c1029e79acf9f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
