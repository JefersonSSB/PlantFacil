import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomMainTabBar from '../components/CustomMainTabBar'


import Home from '../screens/Home';
import Info from '../screens/Info';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomMainTabBar {...props}/>} >
        <Tab.Screen  name="Home" component={Home} /> 
        <Tab.Screen name="Info" component={Info} />     
    </Tab.Navigator>
);