//@ts-nocheck
// NPM packages
import { getDoc } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore/lite";
import { firestoreInstance } from "scripts/firebase/firebase";

// Create doc with auto id
export async function createDoc(path: string, data: object) {
  const collectionReference = collection(firestoreInstance, path);
  await addDoc(collectionReference, data);
}

export async function createDocumentWithId(
  path: string,
  id: string,
  data: object
) {
  const documentReference = doc(firestoreInstance, path, id);
  await setDoc(documentReference, data);
  return id;
}

// Read files
export async function getCollection(path: string) {
  const collectionReference = collection(firestoreInstance, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { ...doc.data() };
  });

  return list;
}

export async function getDocument(path: string, id: string) {
  const documentReference = doc(firestoreInstance, path, id);
  const document = await getDoc(documentReference);
  return { id: document.id, ...document.data() };
}

// Update file
export async function updateDocument(path: string, id: string, data: object) {
  const docReference = doc(firestoreInstance, path, id);
  let updatedCourse = { ...data };
  await updateDoc(docReference, updatedCourse);
}

// Delete file
export async function deleteDocument(path: string, id: string) {
  const docReference = doc(firestoreInstance, path, id);
  await deleteDoc(docReference);
}
