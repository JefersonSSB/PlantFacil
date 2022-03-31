import React, { useState, useEffect, useContext } from 'react';
import { Container, AppName, Scroller, TitleDescription, Description, BName, BottonSpace, Barea } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PlantVariety } from '../../data/pesteTratament';
import { UserContext } from '../../contexts/UserContext';


export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params;

    const [list, setList] = useState([]);

    const { state: plant } = useContext(UserContext);

    const getPlant = () => {

        const plantVariety = PlantVariety;
        const plantList = plantVariety[id.params.id].variantes;
        let idQual = id.params.id2 ? id.params.id2 : 0;
        setList(plantList[idQual]);
    }

    const handleBackButton = async () => {
        navigation.goBack();
    };


    const handleClickO = () => {

        navigation.navigate('PestTratament', {
            screen: 'PestTratament',
            params: { id: id.params.id, id2: 0 }
        });
    }

    const handleClickQ = () => {

        navigation.navigate('PestTratament', {
            screen: 'PestTratament',
            params: { id: id.params.id, id2: 1 }
        });
    }

    useEffect(() => {
        getPlant();
    }, [list, id]);


    return (
        <Container>
            <Barea>
                <BottonSpace onPress={handleClickO}><BName>Orgânico</BName></BottonSpace>
                <BottonSpace onPress={handleClickQ}><BName>Químico</BName></BottonSpace>
            </Barea>
            <Scroller>
                <AppName>{list.nome}</AppName>
                <TitleDescription>Tratamento:</TitleDescription>
                <Description>{list.description}</Description>
            </Scroller>
        </Container >
    );
}