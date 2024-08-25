import axios from "axios"
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import generateUniqueId from "generate-unique-id"
import { db } from "../../firebaseConfig"

export const GetData = (data) => {

    return{
        type: "GETDATA",
        payload: data
    }

}

export const UpdateData = (data) => {

    return{
        type: "UPDATEDATA",
        payload: data
    }    
        
}

export const DeleteData = (id) => {

    return{
        type: "DELETEDATA",
        payload: id
    }

}

export const DataGet = () => {

    return async dispatch => {

        try{
            const Collection = collection(db, "Data");
            const GetDoc = await getDocs(Collection);
            const listNote = GetDoc.docs.map(doc => ({id: doc.id, ...doc.data() }));
            console.log("GET DATA : ", listNote);
            dispatch(GetData(listNote));
        } catch(err) {
            console.log("ERR : ", err);
        }

    }

}

export const DataPost = (data) => {

    
    return async dispatch => {
        
        try{

            if(data.image){
                const avatarUrl = await uploadImage(data.image);
                data.image = avatarUrl;
            }

            data.id = generateUniqueId({
                length: 4,
                useLetters: false
            });

            const Collection = doc(db, "Data", data.id);
            await setDoc(Collection, data);
            console.log("POST DATA : ", data);
            dispatch(DataGet());

        } catch(err) {
            console.log("ERR : ", err);
        }

    }
    
}

export const SingleRecordData = (id) => {

    return async dispatch => {

        try{

            const docs = doc(db, "Data", id);
            const GetDoc = await getDoc(docs);

            if(GetDoc.exists()){
                dispatch(UpdateData({id: GetDoc.id, ...GetDoc.data()}));
            }else{
                console.log("ERROR!");
            }
            console.log("SINGLE RECORD DATA : ", GetDoc);

        } catch(err) {
            console.log("ERR : ", err);
        }

    }

}

export const DataUpdate = (data) => {

    return async dispatch => {

        try{

            const docs = doc(db, "Data", data.id);
            await updateDoc(docs, data);
            console.log("UPDATED DATA : ", updateDoc);
            dispatch(DataGet());

        } catch(err) {
            console.log("ERR : ", err);
        }

    }

}

export const DataDelete = (id) => {

    return async dispatch => {

        try{

            const docs = doc(db, "Data", id);
            await deleteDoc(docs);
            console.log("DELETE DATA : ", docs);
            dispatch(DeleteData(id));
            dispatch(DataGet());

        } catch(err) {
            console.log("ERR : ", err);
        }

    }

}








