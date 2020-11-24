import PropTypes from 'prop-types';
import React, {useEffect, useState, useCallback} from 'react';
import {View, ScrollView, Text, RefreshControl} from 'react-native';
import ServiceApi from 'services/ServiceApi';
import Spinner from 'screens/components/Spinner';
import {saveListAction, setActiveRecordAction} from 'store/actions/data.action';
import RecordInfo from 'screens/components/RecordInfo';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import style from 'screens/style.js';

const ScreenList = ({navigation}) => {
  const records = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    /*
      get list from the web
    */

    setRefreshing(true);

    try {
      const result = await ServiceApi.getData();
      dispatch(saveListAction(result));
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  };

  const onPullRefresh = useCallback(async () => {
    setRefreshing(true);
    await getList();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getList();
  }, []);

  const openDetail = (record) => {
    dispatch(setActiveRecordAction(record));
    navigation.navigate('Detail');
  };

  return (
    <>
      {refreshing === false ? (
        <>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onPullRefresh}
              />
            }>
            <View style={style.mainContainer}>
              {records.map((record) => (
                <RecordInfo
                  onPress={() => openDetail(record)}
                  key={record.enqId.toString()}
                  recordDetail={record}
                />
              ))}
            </View>
          </ScrollView>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
ScreenList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default ScreenList;
