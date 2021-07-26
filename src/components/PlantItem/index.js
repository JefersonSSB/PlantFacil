import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import {Area,  Avatar, Name, InfoArea} from './styles';

import { UserContext } from '../../contexts/UserContext';

export default ({data}) =>{

    const { dispatch : userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

   
    

    const  handleClick = () => {

        userDispatch({
            type: 'setPlant',
            payload:{
                plantId: data.nome
            }
        });

        navigation.navigate( 'PlantTab', {
            screen: 'PlantInfo',
            params: { nome: data.nome }
        });
    }

    return (
        <Area onPress={handleClick} style={{backgroundColor: '#dcf8d6'}}>
            <Avatar source={{uri:data.imagen}} />
            <InfoArea>
                <Name>{data.nome}</Name>
            </InfoArea>
        </Area>
    )
}