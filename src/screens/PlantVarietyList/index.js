import React, { useState} from 'react';
import {Container, Logo, AppName, Area} from './styles'; 
import { useRoute, useNavigation } from '@react-navigation/native';

export default () =>{
    const route = useRoute();
    const navigation = useNavigation();

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <Container>
           <Area  onPress={()=>goTo('PlantVarietyInfo')}>
            <AppName>Lista</AppName>
           </Area>
           <Area  onPress={()=>goTo('PlantVarietyInfo')}>
            <AppName>Lista</AppName>
           </Area>
           <Area  onPress={()=>goTo('PlantVarietyInfo')}>
            <AppName>Lista</AppName>
           </Area>
        </Container>
    );
}