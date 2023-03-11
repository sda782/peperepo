
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDfn7JlTVzJ2-jxhhgwrdf6tbmYLinZRtI",
    authDomain: "peperepo-96e21.firebaseapp.com",
    projectId: "peperepo-96e21",
    storageBucket: "peperepo-96e21.appspot.com",
    messagingSenderId: "848166096970",
    appId: "1:848166096970:web:f2618030d2d45ebb1bd6b3"

};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const storageRef = ref(storage)