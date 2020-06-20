import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Module1 from '../screens/modules/module1';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Module1" component={Module1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
