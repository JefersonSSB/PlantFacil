import React, { useState, useEffect } from 'react';
import {Container,  Scroller, ListArea, HeaderArea, HeaderTitle, HeaderInfo} from './styles'; 
import { useNavigation } from '@react-navigation/native';
import PlantItem from '../../components/PlantItem';


export default () =>{

    const [list, setList] = useState([]);

    const navigation = useNavigation();

    

    const getBarbers = () => {
        const plant = [
            {nome: "Tomate", color: "#eb5b34",  imagen: "https://scfoods.fbitsstatic.net/img/p/tomate-debora-maduro-para-molho-500g-70892/257510.jpg?w=550&h=366&v=no-change" },
            {nome: "Alfaçe", color: "#36b32b", imagen: "https://supermercadomg.com.br/wp-content/uploads/2020/03/adc868_af2ed37141634a57b29cb928e97c3002_mv2.png" },
            {nome: "Cenoura", color: "#eb9934", imagen: "https://cdn.dooca.store/457/products/cenoura-organica_620x620+fill_ffffff.png?v=1588556578"}
        ];
    
        setList(plant);
    }
    
    useEffect(() =>{
        getBarbers();
    },[]);
    

   

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Hortaliças</HeaderTitle>
                <HeaderInfo>Selecione a hortaliça que deseja plantar</HeaderInfo>
            </HeaderArea>
            <Scroller>
                <ListArea>
                    {  list.map((item,k)=>(
                        <PlantItem key={k} data={item}/>
                    ))}
                </ListArea>
            </Scroller >
        </Container>
    );
}