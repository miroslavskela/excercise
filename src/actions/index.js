import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  GET_USER,
  UPDATE_USER
} from "./types";
import axios from "axios";
const ROOT_URL = 'http://localhost:3000/users'

export function getUsers() {
  const request = axios.get('http://localhost:3000/users');

  return {
    type: GET_USERS,
    payload: request
  };
}

export function addUser(props) {
  const request = axios.post(`${ROOT_URL}`, props);

  return {
    type: ADD_USER,
    payload: request
  };
}

export function getUser(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: GET_USER,
    payload: request
  };
}

export function deleteUser(id) {
  const request = axios.delete(`${ROOT_URL}/${id}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}

export function updateUser(id) {
    const request = axios.put(`${ROOT_URL}/${id}`);
  
    return {
      type: UPDATE_USER,
      payload: request
    };
  }
