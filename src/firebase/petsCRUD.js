import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore/lite";
import { db, auth } from "./firebase";

export async function getPets() {
  const userUid = auth.currentUser.uid;
  const petsCol = collection(db, "pets");
  const petsSnapshot = await getDocs(petsCol);
  const petsList = petsSnapshot.docs
    .filter((doc) => doc.data().userUID === userUid)
    .map((doc) => doc.data());
  return petsList;
}

export async function getPetById(petID) {
  const petDocRef = doc(db, "pets", petID);
  const docSnap = await getDoc(petDocRef);
  return docSnap.data();
}

export async function addPets(newPet) {
  const userUid = auth.currentUser.uid;
  if (userUid) {
    const petCollection = collection(db, "pets");
    const newDocRef = doc(petCollection);
    await setDoc(newDocRef, { ...newPet, id: newDocRef.id, userUID: userUid });
    return newDocRef.id;
  }
}

export async function deletePet(petID) {
  const petDocRef = doc(db, "pets", petID);
  return await deleteDoc(petDocRef);
}

export async function deleteDataByDate(petId, date) {
  const petDocRef = doc(db, "pets", petId);

  const petDoc = await getDoc(petDocRef);
  if (!petDoc.exists()) return;

  const currentData = petDoc.data().data || [];

  const updatedData = currentData.filter((obj) => {
    return obj.date !== date.date;
  });

  await updateDoc(petDocRef, { data: updatedData });
}

export async function addDataByDate(petId, newData, date) {
  const petDocRef = doc(db, "pets", petId);

  const petDoc = await getDoc(petDocRef);
  if (!petDoc.exists()) return;

  const currentData = petDoc.data().data || [];

  const updatedData = currentData.map((obj) => {
    return obj.date === date ? { ...obj, ...newData } : obj;
  });

  if (!updatedData.some((obj) => obj.date === date)) {
    updatedData.push(newData);
  }

  await updateDoc(petDocRef, { data: updatedData });
}

export async function getData(petId, date) {
  const petDocRef = doc(db, "pets", petId);

  const petDoc = await getDoc(petDocRef);
  if (!petDoc.exists()) return;

  const currentData = petDoc.data().data || [];
  const data = currentData.find((data) => {
    return data.date === date;
  });

  return data;
}
