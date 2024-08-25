import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, db, provider } from "../../firebaseConfig"
import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"

export const SignUpStore = (data) => {

    return{
        type: "SIGNUPDATA",
        payload: data.password
    }

}

export const setFirebaseData = (data) => {

    return{
        type: "SETFIREBASEDATA",
        payload: data
    }

}

export const AddToCart = (data) => {

    return{
        type: "ADDTOCART",
        payload: data
    }

}

export const ViewOrder = (data) => {

    return{
        type: "VIEWORDER",
        payload: data
    }

}

export const LogInUser = (data) => {

    console.log("LOGIN USER : ", data);

    return dispatch => {

        signInWithEmailAndPassword(auth, data.email, data.password).then((userCr) => {

            console.log("USER LOGIN : ", userCr.user);

        }).catch((err) => {

            console.log("ERROR : ", err);

        })

    }

}

export const SignUpUser = (data) => {

    console.log("SIGNUP USER : ",data);

    return dispatch => {

        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCr) => {

            console.log("USER SIGNUP : ", userCr.user);

        }).catch((err) => {
            
            console.log("ERROR : ", err);

        })

    }

}

export const GoogleAuth = () => {
    return async dispatch => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google Auth User: ", user);
        } catch (error) {
            console.error("Google Auth Error: ", error);
        }
    };
};

export const fetchFirebaseData = () => {    
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, "items"));
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            dispatch(setFirebaseData(data));
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };
};








