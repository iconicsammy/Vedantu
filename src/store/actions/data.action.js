import actionTypes from '../types';

export function saveListAction(payload) {
  const b = {type: actionTypes.SAVE_LIST, payload};
  return b;
}

export function setActiveRecordAction(payload) {
  return {type: actionTypes.SET_ACTIVE_RECORD, payload};
}

export function getActiveRecordAction() {
  return {type: actionTypes.GET_RECORD};
}
