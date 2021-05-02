import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDUZUCfD_wGsF-L7hT34_qq8ovizlJd05E",
  authDomain: "avishka-dev-slack-clone-react.firebaseapp.com",
  databaseURL: "https://avishka-dev-slack-clone-react-default-rtdb.firebaseio.com",
  projectId: "avishka-dev-slack-clone-react",
  storageBucket: "avishka-dev-slack-clone-react.appspot.com",
  messagingSenderId: "671382271286",
  appId: "1:671382271286:web:1476a6a3be50c9558def97",
  measurementId: "G-EEHP9RVVL1"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
