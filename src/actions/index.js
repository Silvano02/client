import streams from "../apis/streams";
import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = formValues => async dispatch => {
  const resp = await streams.post("/streams", formValues);

  dispatch({ type: CREATE_STREAM, payload: resp.data });
};

export const fetchStreams = () => async dispatch => {
  const resp = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: resp.data });
};

export const fetchStream = id => async dispatch => {
  const resp = await streams.get(`/strams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: resp.data });
};

export const editStream = (id, formaValues) => async dispatch => {
  const resp = await streams.put(`/streams/${id}`, formaValues);

  dispatch({ type: EDIT_STREAM, payload: resp.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
