import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyB8SFHLWKUGYyYMHX8Ggnqnn9j4zG7ZT5w",
  authDomain: "quickchat-72b54.firebaseapp.com",
  databaseURL: "https://quickchat-72b54.firebaseio.com",
  projectId: "quickchat-72b54",
  storageBucket: "",
  messagingSenderId: "619948493222",
  appId: "1:619948493222:web:ff47476cefefe15e"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
