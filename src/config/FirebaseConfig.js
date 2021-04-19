import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIjpYoIktcg-QIqZOgYcVnIoU2IQL6nmo",
  authDomain: "aplicacionventas-73ca2.firebaseapp.com",
  projectId: "aplicacionventas-73ca2",
  storageBucket: "aplicacionventas-73ca2.appspot.com",
  messagingSenderId: "562873733883",
  appId: "1:562873733883:web:a468a4aeb128b07039965e",
  measurementId: "G-TXCB3X588C"
};

const firebaseInit = firebase.initializeApp(firebaseConfig)

const store = firebaseInit.firestore()
const auth = firebaseInit.auth()

export { auth, store }
