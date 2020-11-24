import {SAVE_LIST} from '../constants';

export function changeCount(count) {
  return {
    type: SAVE_LIST,
    payload: count,
  };
}
