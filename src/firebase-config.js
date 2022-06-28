import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6haOJTNKCB6YRQ4GJzK8EphAB-fxjyHM",
  authDomain: "tests-96798.firebaseapp.com",
  databaseURL: "https://tests-96798-default-rtdb.firebaseio.com",
  projectId: "tests-96798",
  storageBucket: "tests-96798.appspot.com",
  messagingSenderId: "430110153746",
  appId: "1:430110153746:web:999387799a249dbc1e0ccb",
  measurementId: "G-TGT2LNXMD6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
