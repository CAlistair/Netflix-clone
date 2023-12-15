import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfn50X9K9fDc2V8RtDIMPL_iok-0s6S2I",
    authDomain: "netflix-clone-fc450.firebaseapp.com",
    projectId: "netflix-clone-fc450",
    storageBucket: "netflix-clone-fc450.appspot.com",
    messagingSenderId: "811711580538",
    appId: "1:811711580538:web:c8ea859a4f1911ed7c2ec3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;