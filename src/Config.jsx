import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJpWiQO_8hKPDuVAZSY3NA3tUgNJ8v6kI",
  authDomain: "fire-base-c43b8.firebaseapp.com",
  projectId: "fire-base-c43b8",
  storageBucket: "fire-base-c43b8.appspot.com",
  messagingSenderId: "88617575974",
  appId: "1:88617575974:web:9fd6d7e6963c5f0df268e7",
  measurementId: "G-W7E6NFPNB6",
  databaseURL : "https://fire-base-c43b8-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



