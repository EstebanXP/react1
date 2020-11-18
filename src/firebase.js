import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAM3kpziMRd_lCTkpJp1L2poFbnuiFxeQw",
    authDomain: "react2020-443fd.firebaseapp.com",
    databaseURL: "https://react2020-443fd.firebaseio.com",
    projectId: "react2020-443fd",
    storageBucket: "react2020-443fd.appspot.com",
    messagingSenderId: "902128555334",
    appId: "1:902128555334:web:8646415f7d3aaf99d40147"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const bdd=firebase.firestore();