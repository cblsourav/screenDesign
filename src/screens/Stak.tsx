import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import My_Profile from './My_Profile';
import Edit_Profile from './Edit_Profile';

const Stack = createNativeStackNavigator();

const Stak = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='My_Profile' component={My_Profile} />
            <Stack.Screen name='Edit_Profile' component={Edit_Profile} />
        </Stack.Navigator>
    )
}
export default Stak