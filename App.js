/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import NavRoutes from 'library/NavRoutes';
import {name as appName} from './app.json';

import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <NavigationContainer>
          <NavRoutes />
        </NavigationContainer>
      </View>
    </>
  );
};

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

export default App;
