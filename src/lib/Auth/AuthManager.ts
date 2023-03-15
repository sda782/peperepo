import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, type User, type UserCredential } from "firebase/auth"
import { writable } from "svelte/store"
import { auth } from "./firebaseconfig"


export const isSignedIn = writable(false)

export function sign_in(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            isSignedIn.set(userCredential.user !== undefined)
        }).catch((err) => {
            console.error(err)
        })
}

export const sign_up = (username: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential: UserCredential) => {
        updateProfile(auth.currentUser, { displayName: "aaa" }).then(() => {
            console.log("updated user")
        })
    })
}

auth.onAuthStateChanged((user: User) => {
    isSignedIn.set(user !== null)
})