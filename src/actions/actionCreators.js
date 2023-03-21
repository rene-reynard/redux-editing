import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CHANGE_EDIT_ID, CLEAR_SERVICE_FIELDS } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function clearServiceFields() {
  return {type: CLEAR_SERVICE_FIELDS}
}

export function changeEditId(editId) {
  return {type: CHANGE_EDIT_ID, payload: {editId}}
}