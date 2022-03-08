import React, { useState, useEffect, useContext } from 'react';
import { Container, Logo, AppName, FakeSwiper, Scroller, TitleDescription, Description, Name, Days, SwipeItem, SwipeImage, BackButton, BottonSpace } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PlantVariety } from '../../data/phaseInfo';
import { UserContext } from '../../contexts/UserContext';


export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params;

    const [list, setList] = useState([]);

    const { state: plant } = useContext(UserContext);

    const getPlant = () => {

        const plantVariety = PlantVariety;
        const plantList = plantVariety[plant.plantId].variantes;
        setList(plantList[id.params.id]);

    }

    const handleBackButton = async () => {
        navigation.goBack();
    };

    useEffect(() => {
        getPlant();
    }, [list, id]);


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
                <TitleDescription>Descrição:</TitleDescription>
                <Description>{list.description}</Description>

            </Scroller>
            <BottonSpace></BottonSpace>
        </Container >
    );
}