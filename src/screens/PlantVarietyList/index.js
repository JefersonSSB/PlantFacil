import React, { useState, useEffect, useContext } from 'react';
import { Container, Scroller, ListArea, HeaderArea, HeaderTitle, HeaderInfo } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import PlantItem from '../../components/PlantVarrietyItem';
import { PlantVariety } from '../../data/variante';

export default () => {

    const route = useRoute();
    const [list, setList] = useState([]);

    const { state: plant } = useContext(UserContext);

    const getPlant = () => {
        const plantVariety = PlantVariety;
        setList(plantVariety[plant.plantId].variantes);
    }

    useEffect(() => {
        getPlant();
    }, [plant]);


    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Variedades</HeaderTitle>
            </HeaderArea>
            <Scroller>
                <ListArea>
                    {list.map((item, k) => (
                        <PlantItem key={k} data={item} tab={"PlantVarietyInfo"} />
                    ))}
                </ListArea>
            </Scroller >
        </Container>
    );
}