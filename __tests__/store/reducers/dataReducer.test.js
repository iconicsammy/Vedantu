import actionTypes from 'store/types';
import dataReducer from 'store/reducers/dataReducer';

describe('Redux Store', () => {
  describe('Reducers', () => {
    const action = {
      type: '',
      payload: '',
    };
    describe('Data Reducer', () => {
      it('should return initial state if no type is provided', () => {
        action.type = '';
        action.payload = [];
        expect(dataReducer(undefined, action)).toEqual({
          data: [],
          activeRecord: undefined,
        });
      });

      it('should store list', () => {
        const data = [{enqId: 12, name: 'test'}];
        action.type = actionTypes.SAVE_LIST;
        action.payload = data;
        expect(dataReducer({}, action)).toEqual({
          activeRecord: undefined,
          data: data,
        });
      });
      it('should set and get active record', () => {
        const data = [{enqId: 12, name: 'test'}];
        action.type = actionTypes.SAVE_LIST;
        action.payload = data;
        const lastState = dataReducer(undefined, action);
        action.type = actionTypes.SET_ACTIVE_RECORD;
        action.payload = data[0];
        //cos state gets lost...we gotta pass the last one
        const setActiveRecordState = dataReducer(lastState, action);
        expect(setActiveRecordState).toEqual({
          data: data,
          activeRecord: data[0],
        });
        action.type = actionTypes.GET_RECORD;
        expect(dataReducer(setActiveRecordState, action)).toEqual(data[0]);
      });
    });
  });
});
