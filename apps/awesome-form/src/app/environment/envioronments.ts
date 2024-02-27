import { initializeApp } from "firebase/app";

export const environment ={
    production: true,
    firebase: {
        apiKey: "AIzaSyDS-84F2tWJb8hUVZw9foxvCnfLhg6qvCg",
        authDomain: "loginproyect-7ad22.firebaseapp.com",
        projectId: "loginproyect-7ad22",
        storageBucket: "loginproyect-7ad22.appspot.com",
        messagingSenderId: "84270977507",
        appId: "1:84270977507:web:49538a54480101b7cf50d6"
    }
}

export const app = initializeApp(environment.firebase);