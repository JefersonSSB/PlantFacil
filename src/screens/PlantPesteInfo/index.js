import React, { useState, useEffect, useContext } from 'react';
import { Container, Logo, AppName, FakeSwiper, Scroller, TitleDescription, Description, Name, Days, SwipeItem, SwipeImage, BName, BottonSpace } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PlantVariety } from '../../data/pesteInfo';
import { UserContext } from '../../contexts/UserContext';
import PesteTratament from '../PesteTratament';


export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params;

    const [list, setList] = useState([]);

    const { state: plant } = useContext(UserContext);

    const getPlant = () => {

        const plantVariety = PlantVariety;
        const plantList = plantVariety[0].variantes;
        setList(plantList[id.params.id]);
    }

    const handleBackButton = async () => {
        navigation.goBack();
    };

    useEffect(() => {
        getPlant();
    }, [list, id]);

    const handleClick = () => {

        navigation.navigate('PestTratament', {
            screen: 'PestTratament',
            params: { id: list.id }
        });
    }


    return (
        <Container>
            <Scroller>
                {list.imagens && list.imagens.length > 0 ?
                    <Swiper
                        style={{ height: 240 }}
                        paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
                        showsButtons={true}
                        prevButton={<Icon name="chevron-left" size={24} color="#FFF" />}
                        nextButton={<Icon name="chevron-right" size={24} color="#FFF" />}
                    >
                        {list.imagens.map((item, key) => (
                            <SwipeItem key={key}>
                                <SwipeImage source={{ uri: item.url }} resizeMode="cover" />
                            </SwipeItem>
                        ))}
                    </Swiper>
                    :
                    <FakeSwiper></FakeSwiper>
                }
                <AppName>{list.nome}</AppName>
                <Name>{list.nomeCientifico}</Name>
                <TitleDescription>Descrição:</TitleDescription>
                <Description>{list.description}</Description>
                <TitleDescription>Sintomas:</TitleDescription>
                <Description>{list.sintoma}</Description>
                <TitleDescription>Prevenção:</TitleDescription>
                <Description>{list.prevencao}</Description>

            </Scroller>
            <BottonSpace>
                <BName onPress={handleClick}>Tratamento</BName>
            </BottonSpace>
        </Container >
    );
}