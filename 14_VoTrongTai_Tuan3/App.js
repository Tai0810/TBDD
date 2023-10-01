import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from './FirstScreen';
import Frame_1a from './Frame_1a';
import Frame_1b from './Frame_1b';
import Frame_1c from './Frame_1c';
import Frame_1d from './Frame_1d';
import Frame_1e from './Frame_1e';
import Frame_2a from './Frame_2a';
import Frame_XMEye from './Frame_XMEye';



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
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false, }}
      />
      <Tab.Screen
        name="Frame_1a"
        component={Frame_1a}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Frame_1b"
        component={Frame_1b}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Frame_1c"
        component={Frame_1c}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Frame_1d"
        component={Frame_1d}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Frame_1e"
        component={Frame_1e}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Frame_2a"
        component={Frame_2a}
        options={{ headerShown: false, }
        }

      />
      <Tab.Screen
        name="Frame_XMEye"
        component={Frame_XMEye}
        options={{ headerShown: false, }
        }
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