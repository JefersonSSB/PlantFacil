import React from 'react'
import styled  from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
`;

export const HeaderArea =  styled.View`
height: 220px;
background-color:#4db32b;  
justify-content:center;
align-items:center;
`;

export const HeaderTitle = styled.Text`
color: #FFF; 
font-size:36px;
margin-top: -60px;
font-weight: bold;
`;

export const HeaderInfo = styled.Text`
color: #FFF; 
font-size:16px;
`;

export const Scroller = styled.ScrollView`
flex:1;
padding:20px;
margin-top: -70px;
border-top-left-radius: 70px;
z-index: 9;
background-color:#fff;
`;

export const ListArea = styled.View`
margin-top:30px;
margin-bottom:30px;
`;