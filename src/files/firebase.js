import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNlFv4xqGzca3laD9MKyO7R84zYkojc54",
  authDomain: "cmrcet-dj.firebaseapp.com",
  projectId: "cmrcet-dj",
  storageBucket: "cmrcet-dj.appspot.com",
  messagingSenderId: "401117059096",
  appId: "1:401117059096:web:01984bc294a6fdea5b0b6d"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
