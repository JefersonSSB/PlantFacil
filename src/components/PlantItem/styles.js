import React from 'react'
import styled  from 'styled-components/native';


export const Area = styled.TouchableOpacity`
margin-bottom: 20px;
border.radius: 20px;
padding:10px;
flex-direction:row;
`;

export const Avatar = styled.Image`
width: 80px;
height:80px;
border-radius:20px;
`;

export const InfoArea = styled.View`
justify-content:center;
margin-left:20px;
justify-content: space-between;
`;

export const Name = styled.Text`
font-size: 24px;
font-weight: bold;
`;