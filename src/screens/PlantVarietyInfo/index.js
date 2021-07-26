import React, { useState} from 'react';
import {Container, Logo, AppName } from './styles'; 
import { useRoute, navigation } from '@react-navigation/native';

export default () =>{
    const route = useRoute();

   

    return (
        <Container>
           <Logo source={require('../../assets/imagens/logo.jpg')} />
           <AppName> Info </AppName>
        </Container>
    );
}