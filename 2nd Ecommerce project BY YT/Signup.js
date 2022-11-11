// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXpPIdfVmAgtNyLfbdyMDyL2nCWDgsSFo",
  authDomain: "galaxyclothes-2dcc8.firebaseapp.com",
  projectId: "galaxyclothes-2dcc8",
  storageBucket: "galaxyclothes-2dcc8.appspot.com",
  messagingSenderId: "711867253820",
  appId: "1:711867253820:web:b950468dc0ce66a245af39",
  measurementId: "G-VEB63NF3XP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

var firstName = document.getElementById("name");
var lastName = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
  e.preventDefault();
  var obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    alert("Your Acount Has Been Created")
    window.location.replace('signin.html')
  })
  .catch(function(err){
    alert(err)
  });

  
};
