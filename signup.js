// Импорт необходимых функций из Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Ваши настройки Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiKHg9POn_rNJHC94yyH2rkj3FoLFdgi8",
  authDomain: "socoolpros.firebaseapp.com",
  projectId: "socoolpros",
  storageBucket: "socoolpros.appspot.com",
  messagingSenderId: "282511305279",
  appId: "1:282511305279:web:7da37c301d77eaf3b5a68a",
  measurementId: "G-KZ8MCGNMLE",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Обработка отправки формы
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    // Попытка регистрации пользователя
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Сохранение дополнительных данных пользователя в Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      uid: user.uid,
    });

    document.getElementById("message").textContent = "User registered successfully!";
    document.getElementById("message").style.color = "green";
  } catch (error) {
    // Обработка ошибок
    if (error.code === 'auth/email-already-in-use') {
      document.getElementById("message").textContent = "Email is already in use.";
      document.getElementById("message").style.color = "red";
    } else {
      document.getElementById("message").textContent = "Error: " + error.message;
      document.getElementById("message").style.color = "red";
    }
  }
});
