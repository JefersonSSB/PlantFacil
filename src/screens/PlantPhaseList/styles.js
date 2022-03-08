import React from 'react'
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
`;

export const HeaderArea = styled.View`
height: 180px;
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

export const Area = styled.View`
margin-bottom:30px;
`;

export const Title = styled.Text`
font-size:20px;
font-weight: bold;
`;

export const HeaderInfo = styled.Text`
color: #FFF; 
font-size:16px;
padding-top: 70px;
`;

export const Scroller = styled.ScrollView`
flex:1;
padding:20px;
border-top-left-radius: 50px;
border-top-right-radius: 50px;
z-index: 9;
margin-top: -70px;
background-color:#fff;
`;

export const ScrollerH = styled.ScrollView`
flex:1;
z-index: 9;
background-color:#fff;
`;

export const ListArea = styled.View`
margin:10px;
height:150px;
`;