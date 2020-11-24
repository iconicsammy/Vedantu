/* eslint-disable react/jsx-closing-bracket-location */
import React, {useEffec} from 'react';
import RecordInfo from 'screens/components/RecordInfo';
import {View, ScrollView} from 'react-native';
import style from 'screens/style.js';
import {useSelector} from 'react-redux';

const ScreenDetail = () => {
  const record = useSelector((state) => state.activeRecord);
  return (
    <>
      <ScrollView>
        <View style={style.mainContainer}>
          <RecordInfo recordDetail={record} />
        </View>
      </ScrollView>
    </>
  );
};
export default ScreenDetail;
