import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5Em4KOkPAepGGsOlOqeT9Zdjthd_hTHg",
  authDomain: "skiplagged-domination-plan.firebaseapp.com",
  databaseURL: "https://skiplagged-domination-plan-default-rtdb.firebaseio.com",
  projectId: "skiplagged-domination-plan",
  storageBucket: "skiplagged-domination-plan.appspot.com",
  messagingSenderId: "371095791777",
  appId: "1:371095791777:web:7714884b006077b1a368e0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
