import React, { useState, useEffect } from 'react';
import { Container, Logo, AppName, FakeSwiper, Scroller, TitleDescription, Description, Name, Days, SwipeItem, SwipeImage, BackButton, BottonSpace } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Plant } from '../../data/hortalicaInfo'


export default () => {
    const route = useRoute();
    const navigation = useNavigation();

    const [list, setList] = useState([]);

    const [plantInfo, SetPlantInfo] = useState({
        id: route.params.id
    });

    const getPlant = () => {

        const plant = Plant;
        setList(plant[plantInfo.id]);
    }

    const handleBackButton = async () => {
        navigation.goBack();
    };

    useEffect(() => {
        getPlant();
    }, []);


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
                <Days>Media do crescimento: {list.dias}</Days>
                <TitleDescription>Descrição:</TitleDescription>
                <Description>{list.description}</Description>
                <TitleDescription>Descrição do plantio:</TitleDescription>
                <Description>{list.plantio}</Description>
                <TitleDescription>Dificuldades do plantio:</TitleDescription>
                <Description>{list.dificuldades}</Description>
                <TitleDescription>Frequencia de Irrigação:</TitleDescription>
                <Description>{list.frequencia}</Description>
                <TitleDescription>Iluminação Ideal:</TitleDescription>
                <Description>{list.Iluminação}</Description>
            </Scroller>
            <BottonSpace></BottonSpace>
        </Container >
    );
}