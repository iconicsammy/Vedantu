import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 280
  }
});

const MyComponent = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator
      color="#148774"
      size="large"
      style={styles.activityIndicator}
    />
  </View>
);

const Spinner = React.memo(MyComponent);
export default Spinner;
