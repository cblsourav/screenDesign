import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  View
} from 'react-native';
import Home from './src/screens/Home';
import Community from './src/screens/Community';
import Network from './src/screens/Network';
import Stak from './src/screens/Stak';
import ExStyle from './src/components/constant/ExStyle';

const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "red", tabBarInactiveTintColor: "grey"
      }} >
        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Image source={require("./src/assets/images/home.png")}
                    style={{ height: 18, width: 20, }}
                  />
                </View>
              )
            }
          }} />
        <Tab.Screen name='Community' component={Community}
          options={{
            tabBarIcon: () => {
              return (
                <Image source={require("./src/assets/images/groups.png")}
                  style={{ height: 22, width: 25 }}
                />
              )
            }
          }}
        />

        <Tab.Screen name='Network' component={Network}
          options={{
            tabBarIcon: () => {
              return (
                <View>
                  <Image source={require("./src/assets/images/low.png")}
                    style={{ height: 20, width: 25 }}
                  />
                  <Image source={require("./src/assets/images/brother.png")} style={ExStyle.main2} />
                </View>
              )
            }
          }}
        />

        <Tab.Screen name='My_Profile' component={Stak} options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image source={require("./src/assets/images/male.png")}
                style={{
                  height: 18, width: 20,
                }}
              />
            )
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
export default App;