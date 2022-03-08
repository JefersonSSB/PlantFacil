import React from 'react'
import styled from 'styled-components/native';

export const BottonSpace = styled.View`
height: 50px;
`;

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #FFFFFF;
`;


export const Scroller = styled.ScrollView`
flex: 1;
`;

export const Logo = styled.Image`
margin-top: -100px;
width: 250px;
height: 250px;
`;

export const SwipeItem = styled.View`
flex: 1;
background-color: #2b8921;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
`;

export const SwipeImage = styled.Image`
width: 100%;
height: 240px;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
`;

export const AppName = styled.Text`
margin-left: 15px;
color: #4b506a; 
font-size:36px;
font-family: sans-serif;
font-weight:bold;
`;

export const Name = styled.Text`
margin-left: 15px;
margin-top: -10px;
color: #000; 
font-size:16px;
font-family: sans-serif;
`;

export const TitleDescription = styled.Text`
margin-left: 15px;
color: #4b506a; 
font-size:18px;
font-weight:bold;
font-family: sans-serif;
`;

export const Days = styled.Text`
margin-left: 15px;
margin-top: 20px;
margin-bottom: 15px;
color: #000; 
font-size:18px;
font-weight:bold;
font-family: sans-serif;
`;

export const Description = styled.Text`
margin-left: 15px;
margin-right: 15px;
color: #6f7288; 
font-size:16px;
font-family: sans-serif;
margin-bottom: 15px;
`;


export const FakeSwiper = styled.View`
height: 240px;
background-color: #2b8921;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
`;

export const BackButton = styled.TouchableOpacity`
position: absolute;
margin: 10px;
left: 0;
top:0;
z-index: 9;
`;