import React, { useState, useContext } from 'react';
import {Container, Logo, AppName} from './styles'; 
import { useRoute } from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext'

export default () =>{

    const { state:plant } = useContext(UserContext);
    const route = useRoute();

    return (
        <Container>
           <Logo source={require('../../assets/imagens/logo.jpg')} />
           <AppName>Doenças de {plant.plantId}</AppName>
        </Container>
    );
}