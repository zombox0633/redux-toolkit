import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { CheckErrorMessage } from "../service/Service";
import db from "./firebase-config";
import {
  DataServiceType,
  FirebaseTimestamp,
  GetDataServiceReturnType,
} from "./DataService.type";
import { FirebaseReturn } from "./serviceApi.type";

export const getDataService =
  async (): FirebaseReturn<GetDataServiceReturnType> => {
    try {
      const dataCol = collection(db, "lodolist");
      const snapShot = await getDocs(dataCol);
      const data = snapShot.docs.map((doc) => {
        const docData = doc.data() as unknown as DataServiceType;

        const firebaseTimestamp =
          docData.timestamp as unknown as FirebaseTimestamp;
        const timestamp =
          firebaseTimestamp && firebaseTimestamp.seconds
            ? new Date(firebaseTimestamp.seconds * 1000).toISOString()
            : new Date().toISOString();
        //แก้ไขเนืองจาก Redux Toolkit ไม่สามารถทำ serialization ได้ใน action ที่ถูก dispatch เนื่องจากมีข้อมูล Date ถึงต้องเป็น string แทนโดยใช้งาน toISOString
        
        return {
          ...docData,
          id: doc.id,
          timestamp,
        };
      });

      return [data, null];
    } catch (error) {
      const errorMessage = CheckErrorMessage(error);
      return [null, errorMessage];
    }
  };

export const addDataService = async (
  messageText: string
): FirebaseReturn<boolean> => {
  try {
    const dataCol = collection(db, "lodolist");
    await addDoc(dataCol, {
      message: messageText,
      timestamp: Timestamp,
    });

    return [true, null];
  } catch (error) {
    const errorMessage = CheckErrorMessage(error);
    return [null, errorMessage];
  }
};

export const updateDataService = async (
  id: string,
  messageText: string
): FirebaseReturn<boolean> => {
  try {
    const dataDoc = doc(db, "lodolist", id);
    await updateDoc(dataDoc, {
      message: messageText,
      timestamp: Timestamp,
    });

    return [true, null];
  } catch (error) {
    const errorMessage = CheckErrorMessage(error);
    return [null, errorMessage];
  }
};

export const deleteDataService = async (
  id: string
): FirebaseReturn<boolean> => {
  try {
    const dataDoc = doc(db, "lodolist", id);
    await deleteDoc(dataDoc);

    return [true, null];
  } catch (error) {
    const errorMessage = CheckErrorMessage(error);
    return [null, errorMessage];
  }
};
