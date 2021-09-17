import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from './screens/First';
import SecondScreen from './screens/Second';
import ThirdScreen from './screens/Third';
import ForthScreen from './screens/Forth';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={FirstScreen} />
      <Tab.Screen name="Second" component={SecondScreen} />
      <Tab.Screen name="Third" component={ThirdScreen} />
      <Tab.Screen name="Forth" component={ForthScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
