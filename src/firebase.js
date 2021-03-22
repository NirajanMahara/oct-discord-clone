import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkzrMew-77XZG4kitlTbb7ktHp3ERdK68",
  authDomain: "discord-clone-202007.firebaseapp.com",
  databaseURL: "https://discord-clone-202007.firebaseio.com",
  projectId: "discord-clone-202007",
  storageBucket: "discord-clone-202007.appspot.com",
  messagingSenderId: "562473750091",
  appId: "1:562473750091:web:21d9569e17ad35cbf687ce",
  measurementId: "G-WBE26050DS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
