import React, { useState} from 'react';
import {Container, Logo, AppName} from './styles'; 
import { useRoute } from '@react-navigation/native';

export default () =>{
    const route = useRoute();

    const [plantInfo, SetPlantInfo] = useState({
        nome: route.params.nome
    });


    return (
        <Container>
           <Logo source={require('../../assets/imagens/logo.jpg')} />
           <AppName>{plantInfo.nome}</AppName>
        </Container>
    );
}