import { collection, doc, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const uploadComment = (movie_id, comment) => {
    const collectionRef = collection(db, "user_comments", movie_id, "comments");
    return addDoc(collectionRef, comment);
}

export const readComments = async (movie_id, minRating = 0) => {
    const commentList = [];
    const collectionRef = collection(db, "user_comments", movie_id, "comments");

    // Use a query to filter comments based on the rating field
    const querySnapshot = await getDocs(query(collectionRef, where("rating", ">=", minRating)));

    querySnapshot.forEach((doc) => {
        commentList.push(doc.data());
    });
    
    return commentList;
}
