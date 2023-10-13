import axios from "axios";

export const ADD_BOOK = "ADD_BOOK";
export const GET_BOOK_REQ = "GET_BOOK_REQ";
export const GET_BOOK_REQ_SUC = "GET_BOOK_REQ_SUC";
export const GET_BOOK_REQ_FAIL = "GET_BOOK_REQ_FAIL";

export const getBookAction = () => async (dispatch) => {
  dispatch({ type: GET_BOOK_REQ });
  try {
    const response = await axios.get("http://localhost:8080/books");
    dispatch({ type: GET_BOOK_REQ_SUC, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_BOOK_REQ_FAIL });
  }
};
export const addBookAction = (bookObj) => async (dispatch) => {
  try {
    console.log(bookObj);
    const response = await axios.post("http://localhost:8080/books", bookObj);
  } catch (error) {}
};
