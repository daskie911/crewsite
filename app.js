import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// Your Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiKHg9POn_rNJHC94yyH2rkj3FoLFdgi8",
  authDomain: "socoolpros.firebaseapp.com",
  projectId: "socoolpros",
  storageBucket: "socoolpros.appspot.com",
  messagingSenderId: "282511305279",
  appId: "1:282511305279:web:7da37c301d77eaf3b5a68a",
  measurementId: "G-KZ8MCGNMLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Select elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

// Login event
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.textContent = 'User logged in successfully!';
      message.style.color = 'green';
    })
    .catch((error) => {
      message.textContent = error.message;
      message.style.color = 'red';
    });
});
