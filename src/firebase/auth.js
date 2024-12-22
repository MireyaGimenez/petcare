import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser } from "./usersCRUD";

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then((value) => {
    addUser({ email: value.user.email, uid: value.user.uid });
  });
};

export const signIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOut = () => {
  return auth.signOut();
};
