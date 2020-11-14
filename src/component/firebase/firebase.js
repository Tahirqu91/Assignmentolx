import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyC7f5P1diSGyN_2UE4VX3JJiptywUcxSSI",
    authDomain: "webandmobile-olx.firebaseapp.com",
    databaseURL: "https://webandmobile-olx.firebaseio.com",
    projectId: "webandmobile-olx",
    storageBucket: "webandmobile-olx.appspot.com",
    messagingSenderId: "35476042699",
    appId: "1:35476042699:web:91230b729482e0741ffc4e",
    measurementId: "G-N6HV9BXJMM"
  };
 
  firebase.initializeApp(firebaseConfig)


  export default firebase;