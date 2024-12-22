import { setDoc, doc, collection } from "firebase/firestore/lite";
import { db } from "./firebase";

export const addUser = async (newUser) => {
  const usersCol = collection(db, "users");
  const newDocRef = doc(usersCol);
  await setDoc(newDocRef, { ...newUser, id: newDocRef.id });
  return newDocRef.id;
};
