const config = require("config");

// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.get("apiKey"),
  authDomain: config.get("authDomain"),
  projectId: config.get("projectId"),
  storageBucket: config.get("storageBucket"),
  messagingSenderId: config.get("messagingSenderId"),
  appId: config.get("appId"),
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

module.exports = db;
