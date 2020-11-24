/* eslint-disable react/jsx-closing-bracket-location */
import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import style from 'screens/style.js';
import Icon from 'react-native-vector-icons/Ionicons';

const RecordInfo = (props) => {
  const {recordDetail, onPress} = props;

  const showPhone = (phone) => {
    Alert.alert('Phone Number Is', phone);
  };

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={style.recordContainer}>
          <View style={style.nameInitialContainer}>
            <Text style={style.nameInitial}>{recordDetail.name.charAt(0)}</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.name}>{recordDetail.name}</Text>
            <Text>{recordDetail.categoryName}</Text>
            <Text>{recordDetail.location}</Text>
            <Text>{recordDetail.providerType}</Text>
          </View>
          <View style={style.status}>
            <Text style={style.timeAgo}>16 hours ago</Text>
            <Icon
              name="phone-portrait-sharp"
              size={30}
              color="#900"
              style={style.icon}
              onPress={() => showPhone(recordDetail.phoneNumber)}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

RecordInfo.propTypes = {
  onPress: PropTypes.func,
  recordDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    providerType: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};

RecordInfo.defaultProps = {
  onPress: undefined,
};

export default RecordInfo;
