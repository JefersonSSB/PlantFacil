import React from 'react'
import styled  from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #FFF;
flex:1;
justify-content:center;
align-items:center;
`;

export const Logo = styled.Image`
margin-top: -100px;
width: 250px;
height: 250px;
`;

export const AppName = styled.Text`
color: #2b8921; 
font-size:48px;
font-family: sans-serif;
`; 

export const Area = styled.TouchableOpacity`
margin-bottom: 20px;
border.radius: 20px;
padding:10px;
flex-direction:row;
background-color: #dcf8d6;

`;