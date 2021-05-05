import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCHQO7K3oJrXRmIVacdYNv8BW0uMbtg4wA",
  authDomain: "wily-app-798f0.firebaseapp.com",
  databaseURL: "https://wily-app-798f0.firebaseio.com",
  projectId: "wily-app-798f0",
  storageBucket: "wily-app-798f0.appspot.com",
  messagingSenderId: "1061968565885",
  appId: "1:1061968565885:web:bca4712e3cb2827efa0314"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();