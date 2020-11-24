/* eslint-disable prefer-destructuring */
/* eslint-disable jest/valid-expect */
import React from 'react';
import {
  render,
  act,
  flushMicrotasksQueue,
  fireEvent,
} from 'react-native-testing-library';
import {mockNavigationProps} from '../testhelpers';
import RecordInfo from 'screens/components/RecordInfo';
import * as ReactRedux from 'react-redux';
import {RefreshControl, View} from 'react-native';
import ServiceApi from 'services/ServiceApi';
import * as mockData from '../mockData.json';
import ScreenList from 'screens/ScreenList';

describe('actvity ScreenList', () => {
  let spyServiceApiGetData;
  let spyUseSelector;
  const props = mockNavigationProps({}, {});

  beforeEach(() => {
    spyServiceApiGetData = jest.spyOn(ServiceApi, 'getData');
    spyUseSelector = jest.spyOn(ReactRedux, 'useSelector');
  });

  afterEach(() => {
    spyServiceApiGetData.mockReset();
    spyUseSelector.mockReset();
  });

  it('renders correctly', async () => {
    spyUseSelector.mockReturnValue(mockData.dataList);
    spyServiceApiGetData.mockResolvedValue([]);

    const snapShotTree = render(
      <ScreenList navigation={props.navigation} />,
    ).toJSON();

    await act(async () => {
      await flushMicrotasksQueue();
    });
    expect(snapShotTree).toMatchSnapshot();
  });

  it('should render all data on the screen', async () => {
    spyServiceApiGetData.mockResolvedValue(mockData.dataList);
    spyUseSelector.mockReturnValue(mockData.dataList);
    const {UNSAFE_getAllByType} = render(
      <ScreenList navigation={props.navigation} />,
    );

    await act(async () => {
      await flushMicrotasksQueue();
    });
    const dataRecordViews = UNSAFE_getAllByType(RecordInfo);
    expect(dataRecordViews).toHaveLength(mockData.dataList.length);
    expect(spyServiceApiGetData).toHaveBeenCalled();
    // click all elements to make sure we open their dedicated screen
    dataRecordViews.forEach((g, index) => {
      fireEvent.press(g);
      expect(props.navigation.navigate).toHaveBeenCalledWith('Detail');
    });
  });

  it('should render groups again on pull refresh', async () => {
    spyServiceApiGetData.mockResolvedValue(mockData.dataList);
    spyUseSelector.mockReturnValue(mockData.dataList);
    const wrapper = render(<ScreenList navigation={props.navigation} />);

    await act(async () => {
      await flushMicrotasksQueue();
    });

    const refreshControl = wrapper.UNSAFE_getByType(RefreshControl);
    // pull refresh
    fireEvent(refreshControl, 'onRefresh', {});
    await act(async () => {
      await flushMicrotasksQueue();
    });
    const dataRecordViews = wrapper.UNSAFE_getAllByType(RecordInfo);
    expect(dataRecordViews).toHaveLength(mockData.dataList.length);
    expect(spyServiceApiGetData).toHaveBeenCalled();
    // click all elements to make sure we open their dedicated screen
    dataRecordViews.forEach((g, index) => {
      fireEvent.press(g);
      expect(props.navigation.navigate).toHaveBeenCalledWith('Detail');
    });
  });

});
