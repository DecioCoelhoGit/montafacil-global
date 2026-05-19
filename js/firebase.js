// =====================================================
// MONTAFÁCIL GLOBAL
// Firebase.js Master
// Conexão oficial Firebase + Auth + Firestore
// Curadoria: Décio Coelho
// Mega Parceria: Curadoria Viracopos + Núcleo de Inovação & IA Generativa + OpenAI + ChatGPT
// =====================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// CONFIGURAÇÃO OFICIAL DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDOwNUtdXtqxWd_VMLjpEBb9yGkACNrIIU",
  authDomain: "montafacil-global.firebaseapp.com",
  projectId: "montafacil-global",
  storageBucket: "montafacil-global.firebasestorage.app",
  messagingSenderId: "336823292108",
  appId: "1:336823292108:web:2c527dc46a99a2c6b0b269"
};

// INICIALIZAÇÃO
const app = initializeApp(firebaseConfig);

// SERVIÇOS
const auth = getAuth(app);
const db = getFirestore(app);

// LOG DE VALIDAÇÃO
console.log("🔥 Firebase MontaFácil Global conectado com sucesso.");

// EXPORTAÇÃO GLOBAL
export { app, auth, db };
