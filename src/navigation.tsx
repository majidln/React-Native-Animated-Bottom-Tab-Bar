import React from 'react';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';

import FirstScreen from './screens/First';
import SecondScreen from './screens/Second';
import ThirdScreen from './screens/Third';
import ForthScreen from './screens/Forth';
import MyTabBar from './components/AnimatedTabBar';

const Tab = createBottomTabNavigator();

function MainTabs() {
  // tabBar={(props) => <MyTabBar {...props} />}
  return (
    <Tab.Navigator tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="First"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-star" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Second"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          )
        }} />
      <Tab.Screen
        name="Third"
        component={ThirdScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lightning-bolt" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Forth"
        component={ForthScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="settings" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
