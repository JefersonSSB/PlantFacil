import React, { useState, useEffect } from 'react';
import { Container, Scroller, ListArea, HeaderArea, HeaderTitle, HeaderInfo } from './styles';
import { useNavigation } from '@react-navigation/native';
import PlantItem from '../../components/PlantItem';
import { Plant } from '../../data/hortalica'

export default () => {

    const [list, setList] = useState([]);

    const navigation = useNavigation();

    const getPlant = () => {
        const plant = Plant;
        setList(plant);
    }

    useEffect(() => {
        getPlant();
    }, []);

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Hortaliças</HeaderTitle>
                <HeaderInfo>O que vamos plantar?</HeaderInfo>
            </HeaderArea>
            <Scroller>
                <ListArea>
                    {list.map((item, k) => (
                        <PlantItem key={k} data={item} tab={"PlantTab"} />
                    ))}
                </ListArea>
            </Scroller >
        </Container>
    );
}