import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDioTv5j0ZPWTMGULmtvW7wRS-B74aYLik",
    authDomain: "aviblogger.firebaseapp.com",
    databaseURL: "https://aviblogger.firebaseio.com",
    projectId: "aviblogger",
    storageBucket: "aviblogger.appspot.com",
    messagingSenderId: "787486631447",
    appId: "1:787486631447:web:db9a1af00c0b452c3f1e52",
    measurementId: "G-W6CNNVYMHT"

}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
