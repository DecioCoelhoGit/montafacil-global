// =====================================================
// MONTAFÁCIL GLOBAL
// Firebase V1 Oficial
// Curadoria: Décio Coelho + IA Generativa
// =====================================================

// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// =====================================================
// CONFIG FIREBASE
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyDOwNUtdXtqxWd_VMLjpEBb9yGkACNrIIU",
  authDomain: "montafacil-global.firebaseapp.com",
  projectId: "montafacil-global",
  storageBucket: "montafacil-global.firebasestorage.app",
  messagingSenderId: "336823292108",
  appId: "1:336823292108:web:2c527dc46a99a2c6b0b269"
};


// =====================================================
// INICIALIZAÇÃO
// =====================================================

const app = initializeApp(firebaseConfig);


// =====================================================
// SERVIÇOS
// =====================================================

const db = getFirestore(app);

const auth = getAuth(app);


// =====================================================
// EXPORTS
// =====================================================

export { app, db, auth };
