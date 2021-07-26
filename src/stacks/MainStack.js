import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Preload  from '../screens/Preload';
import MainTab from './MainTab';
import PlantTab from './PlantTab';
import PlantPhaseList from '../screens/PlantPhaseList';
import PlantPestList from '../screens/PlantPestList';


export default () => (

        <Stack.Navigator  initialRouteName="Preload">
            <Stack.Screen options={{headerShown:false}} name="Preload" component={Preload} /> 
            <Stack.Screen options={{headerShown:false}} name="MainTab" component={MainTab} />  
            <Stack.Screen options = {{title:"Cultivo"}} name="PlantTab" component={PlantTab} /> 
            <Stack.Screen options = {{title:"Fases do Cultivo"}} name="PlantPhaseList" component={PlantPhaseList} /> 
            <Stack.Screen options = {{title:"Doeças e Pragas"}} name="PlantPestList" component={PlantPestList} />   
        </Stack.Navigator>
);