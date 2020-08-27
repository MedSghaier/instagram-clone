import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import firebaseConfigCreds from './credentials';
var firebaseConfig = firebaseConfigCreds;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const fireStorage = firebase.storage();
  const firestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { fireStorage, firestore, timestamp };