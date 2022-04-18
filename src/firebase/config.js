import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCofKNWiqcq10YOzWRah1Zcmd9XW3sqS0o",
  authDomain: "mymoney-bdfef.firebaseapp.com",
  projectId: "mymoney-bdfef",
  storageBucket: "mymoney-bdfef.appspot.com",
  messagingSenderId: "238453605483",
  appId: "1:238453605483:web:634cef5ff741bd5aab5d2e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
