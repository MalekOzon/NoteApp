import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD93Va4weq-C3g1WTvZFRMrZwSB5BSzvIM",
    authDomain: "react-notes-271c4.firebaseapp.com",
    projectId: "react-notes-271c4",
    storageBucket: "react-notes-271c4.appspot.com",
    messagingSenderId: "658247079810",
    appId: "1:658247079810:web:2519c30d9f04ca41b1619b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")