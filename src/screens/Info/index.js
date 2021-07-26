import React from 'react';
import {Container, Logo, AppName} from './styles'; 

export default () =>{

    return (
        <Container>
           <Logo source={require('../../assets/imagens/logo.jpg')} />
           <AppName>PlantFacil </AppName>
        </Container>
    );
}