import firebase from 'firebase/app'
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAQYqeUVGNkdXee1nkA9-zZYrFbFkT3pHM",
    authDomain: "unichat-86dae.firebaseapp.com",
    projectId: "unichat-86dae",
    storageBucket: "unichat-86dae.appspot.com",
    messagingSenderId: "934957682411",
    appId: "1:934957682411:web:36bd608e52a7fd887a38ae"
  }).auth();