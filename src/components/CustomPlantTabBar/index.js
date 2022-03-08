import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabArea, TabItem, TabText, TabItemCenterText, TabItemCenter } from './styles';


export default ({ state, navigation, descriptors }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const focusedOptions = descriptors[state.routes[state.index].key];
    if (focusedOptions.options.tabBarVisible === false) {
        return null;
    }


    return (
        <TabArea>
            <TabItem onPress={() => goTo('PlantPhaseList')}>
                <Icon name="lightbulb-o" size={24} color="#FFF" />
                <TabText >Dicas de Cultivo</TabText>
            </TabItem >
            <TabItemCenter onPress={() => goTo('PlantVarietyList')}>
                <Icon name="pagelines" size={32} color="#FFF" />
                <TabItemCenterText >Variedades</TabItemCenterText>
            </TabItemCenter >
            <TabItem onPress={() => goTo('PlantPestList')}>
                <Icon name="bug" size={24} color="#FFF" />
                <TabText>Doenças e Pragas</TabText>
            </TabItem >
        </TabArea>
    );

}