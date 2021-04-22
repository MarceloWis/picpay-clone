import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import TabRoutes from './tabs.routes';
import { StatusBar } from 'react-native';
const Routes = () => (
  <>
    <StatusBar backgroundColor="#000" barStyle="light-content"  />
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  </>
)

export default Routes
