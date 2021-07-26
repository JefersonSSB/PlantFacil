import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabArea, TabItem, TabText, AvatarIcon, TabItemCenter, HeaderInfo} from './styles'; 

export default ({state,navigation}) =>{

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
 
        <TabArea>
            <TabItem  onPress={()=>goTo('Home')}>
                <Icon name="leaf" size={24} color="#FFF" />
                <TabText>Cultivos</TabText>
            </TabItem>
            <TabItem   onPress={()=>goTo('Info')}>
                <Icon name="info-circle" size={24} color="#FFF" />
                <TabText>Informações</TabText>
            </TabItem >
        </TabArea>
    );
}