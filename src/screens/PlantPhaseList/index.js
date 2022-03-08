import React, { useState, useEffect, useContext } from 'react';
import { Container, Scroller, ListArea, HeaderArea, HeaderTitle, HeaderInfo, ScrollerH, Title, Area } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Phases } from '../../data/phase';
import { UserContext } from '../../contexts/UserContext';
import PlantItem from '../../components/PhaseItem';


export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { state: plant } = useContext(UserContext);
    const [list, setList] = useState([]);


    const getPlant = () => {

        const phasesList = Phases;
        const phaseItem = phasesList[plant.plantId]?.object;
        setList(phaseItem);
    }

    const handleBackButton = async () => {
        navigation.goBack();
    };

    useEffect(() => {
        getPlant();
    }, [plant, list]);


    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Fases do Cultivo</HeaderTitle>
            </HeaderArea>
            <Scroller>
                {list && list.length > 0 ?
                    list.map((item, k) => (
                        <Area key={k}>
                            <Title>{item.name}</Title>
                            <Title>{item.phase}</Title>
                            <ScrollerH horizontal={true}>
                                <ListArea style={{ flex: 1, flexDirection: 'row' }}>
                                    {
                                        item.items.map((o, key) => (
                                            <PlantItem key={key} data={o} tab={"PlantPhaseInfo"} />
                                        ))}
                                </ListArea>
                            </ScrollerH >
                        </Area>
                    )) : <Title>Sem dados</Title>}
            </Scroller>
        </Container>
    );
}