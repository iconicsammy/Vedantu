import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenList from 'screens/ScreenList';
import ScreenDetail from 'screens/ScreenDetail';

const Stack = createStackNavigator();

function NavRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen name="List" component={ScreenList} />
      <Stack.Screen name="Detail" component={ScreenDetail} />
    </Stack.Navigator>
  );
}

export default NavRoutes;
