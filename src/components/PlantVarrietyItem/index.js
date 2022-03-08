import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Area, Avatar, Name, InfoArea } from './styles';

import { UserContext } from '../../contexts/UserContext';

export default ({ data, tab }) => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();


    const handleClick = () => {

        navigation.navigate(tab, {
            screen: 'PlantInfo',
            params: { id: data.id }
        });
    }

    return (
        <Area onPress={handleClick} style={{ backgroundColor: '#dcf8d6' }}>
            <Avatar source={{ uri: data.imagen }} />
            <InfoArea>
                <Name>{data.nome}</Name>
            </InfoArea>
        </Area>
    )
}