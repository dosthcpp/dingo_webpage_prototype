import API from "../api/api";
import { GET_DATA, GET_AGREEMENT } from "./types";

export const fetchParentList = () => async (dispatch) => {
  try {
    await API.get("/process/listuser", {
      params: {},
    })
      .then((response) => {
        dispatch({
          type: GET_DATA,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log("fetch failed!");
        console.log(e);
      });
    // 요청 성공
  } catch (e) {
    console.log(e);
  }
};

export const fetchAgreementList = () => async (dispatch) => {
  try {
    await API.get("/process/listAgreement", {
      params: {
        page: 0,
        perPage: 10,
      },
    })
      .then((response) => {
        dispatch({
          type: GET_AGREEMENT,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log("fetch failed!");
        console.log(e);
      });
    // 요청 성공
  } catch (e) {
    console.log(e);
  }
};
