import firebase from 'firebase';
import { toast } from './toast';

const firebaseConfig = {
    apiKey: "AIzaSyBA5YBKtj0K4quhXFM--YDGspCr31LoJE4",
    authDomain: "ion-com67.firebaseapp.com",
    projectId: "ion-com67",
    storageBucket: "ion-com67.appspot.com",
    messagingSenderId: "253136824791",
    appId: "1:253136824791:web:3067416d1178cc6b78c392",
    measurementId: "G-BSRC5YNSCZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export async function loginUser(email: string, password: string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
        return true;
    } catch (error) {
        console.log(error);
        toast(error.message, 4000);
        return false;
    }
}

export async function registerUser(email: string, password: string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res);
        return true
    } catch (error) {
        console.log(error);
        toast(error.message, 4000)
        return false
    }
}