import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyCsRxuuCoLWhCgQTQBga5nqUdpRRNtW9gE",
  authDomain: "proyecto-final-7ce8e.firebaseapp.com",
  databaseURL: "https://proyecto-final-7ce8e-default-rtdb.firebaseio.com",
  projectId: "proyecto-final-7ce8e",
  storageBucket: "proyecto-final-7ce8e.appspot.com",
  messagingSenderId: "383024652362",
  appId: "1:383024652362:web:df43014a88b7bbf659c6b3"
        };


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)
