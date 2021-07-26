import React from 'react';
import styled from 'styled-components/native';


export const TabArea = styled.View`
height: 60px;
background-color:#4db32b;
flex-direction: row;
`;

export const TabText = styled.Text`
text-align: center;
color: #FFF;
`;


export const  TabItem = styled.TouchableOpacity`
flex:1;
justify-content: center;
align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
width:100px;
height:100px;
justify-content:center;
align-items:center;
background-color:#4db32b;
border-radius: 50px;
border-bottom-right-radius: -50px;
border: 5px solid  #FFF;
margin-top: -40px;
`;

export const TabItemCenterText = styled.Text`
text-align: center;
color: #fff;
font-weight: bold;
`;