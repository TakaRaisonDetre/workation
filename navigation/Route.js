import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  DestinationSearchScreen from '../screens/DestinationSearch'
import  GuestScreen from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'
import AccomodationScreen from '../screens/AccomodationPlace'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
         <Stack.Navigator>


         <Stack.Screen
              name="Home"
              component={HomeTabNavigator}
              options={{
                  headerShown:false
              }}
             />
           
         <Stack.Screen
              name="Guest"
              component={GuestScreen}
              options={{
                  title:'行きたいところを探す'
              }}
             />
             
             <Stack.Screen
              name="Destination"
              component ={DestinationSearchScreen}
              options={{
                 title:'何名様ですか'
              }}
             /> 

           <Stack.Screen
              name="accomodation"
              component ={AccomodationScreen}
              options={{
                 title:'Location Venue'
              }}
             />  
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
