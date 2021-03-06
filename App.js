import React from 'react';
import MainStack from './src/stacks/MainStack'
import { NavigationContainer } from '@react-navigation/native'
import UserContextProvider from './src/contexts/UserContext'

export default() =>{
  return(
    <UserContextProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextProvider>
  );
}


