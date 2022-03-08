import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Preload from '../screens/Preload';
import MainTab from './MainTab';
import PlantTab from './PlantTab';
import PlantPhaseList from '../screens/PlantPhaseList';
import PlantPhaseInfo from '../screens/PlantPhaseInfo';
import PlantPestList from '../screens/PlantPestList';
import PlantPesteInfo from '../screens/PlantPesteInfo';
import PestTratament from '../screens/PesteTratament';


export default () => (

    <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen options={{ headerShown: false }} name="Preload" component={Preload} />
        <Stack.Screen options={{ headerShown: false }} name="MainTab" component={MainTab} />
        <Stack.Screen options={{ title: "Hortaliças" }} name="PlantTab" component={PlantTab} />
        <Stack.Screen options={{ title: "Fases do Cultivo" }} name="PlantPhaseList" component={PlantPhaseList} />
        <Stack.Screen options={{ title: "Fase do Cultivo" }} name="PlantPhaseInfo" component={PlantPhaseInfo} />
        <Stack.Screen options={{ title: "Doenças e Pragas" }} name="PlantPestList" component={PlantPestList} />
        <Stack.Screen options={{ title: "Doenças e Pragas" }} name="PlantPesteInfo" component={PlantPesteInfo} />
        <Stack.Screen options={{ title: "Tratamento" }} name="PestTratament" component={PestTratament} />
    </Stack.Navigator>
);