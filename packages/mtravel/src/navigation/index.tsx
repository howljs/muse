import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Profile} from '../screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Profile} />
    </Stack.Navigator>
  );
};

export default Main;
