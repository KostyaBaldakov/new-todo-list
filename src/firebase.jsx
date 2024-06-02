import { initializeApp } from "firebase/app";
import { Database, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu7lZh5uaqmK1GNnw0SgzaKJ_00Atpb6s",
  authDomain: "todo-list-4f50f.firebaseapp.com",
  projectId: "todo-list-4f50f",
  storageBucket: "todo-list-4f50f.appspot.com",
  messagingSenderId: "197389252617",
  appId: "1:197389252617:web:f7b9186b848230673760d8",
  databaseURL:
    "https://todo-list-4f50f-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
