import React, {useEffect} from 'react';
import {Container, Logo, AppName} from './styles'; 
import {useNavigation} from '@react-navigation/native';



export default () =>{

    const navigate = useNavigation();
        
    useEffect(() => {

        navigate.reset({
            routes:[{name:'MainTab'}]
        });
    
    }, []);

    return (
        <Container>
           <Logo source={require('../../assets/imagens/logo.jpg')} />
           <AppName>PlantFacil </AppName>
        </Container>
    );
}