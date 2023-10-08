import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Frame2a from './Frame/Frame2a';
import Frame2c from './Frame/Frame2c';
import Frame2b from './Frame/Frame2b';
import FrameTiki_Ok from './Frame/FrameTiki_Ok';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          textAlign: 'center',
          fontSize: 10,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Frame2a"
        component={Frame2a}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Frame2b"
        component={Frame2b}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Frame2c"
        component={Frame2c}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="FrameTiki_Ok"
        component={FrameTiki_Ok}
        options={{ headerShown: false, }}
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}