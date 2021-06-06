import { GET_PARENT_LIST, GET_AGREEMENT } from "./types";
import { firestore } from "../firebase";

export const fetchParentList = () => async (dispatch) => {
  try {
    // /process/listuser
    const parents = [];
    const snap = await firestore.collection("user").get();
    for (var i = 0; i < snap.docs.length; ++i) {
      parents.push(snap.docs[i].data()["부모님 성함"]);
    }
    dispatch({
      type: GET_PARENT_LIST,
      payload: parents,
    });
    // 요청 성공
  } catch (e) {
    console.log(e);
  }
};

export const fetchAgreementList = () => async (dispatch) => {
  try {
    // /process/listAgreement
    const agreementList = [];
    const snap = await firestore.collection("consentList").get();
    for (var i = 0; i < snap.docs.length; ++i) {
      agreementList.push(snap.docs[i].data());
    }
    dispatch({
      type: GET_AGREEMENT,
      payload: agreementList,
    });
    // 요청 성공
  } catch (e) {
    console.log(e);
  }
};
