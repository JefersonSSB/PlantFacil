import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomPlantTabBar from '../components/CustomPlantTabBar'

import PlantInfo from '../screens/PlantInfo';
import PlantVarietyList from '../screens/PlantVarietyList';
import PlantVarietyInfo from '../screens/PlantVarietyInfo';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomPlantTabBar {...props}/> } >
        <Tab.Screen  name="PlantInfo" component={PlantInfo} />  
        <Tab.Screen options = {{title:"Variedades"}} name="PlantVarietyList" component={PlantVarietyList} /> 
        <Tab.Screen options = {{title:"Cultivo"}} name="PlantVarietyInfo" component={PlantVarietyInfo} />   
    </Tab.Navigator>
);
