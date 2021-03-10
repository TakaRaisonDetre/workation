import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5, FontAwesome, Feather, EvilIcons, Fontisto} from '@expo/vector-icons'
import ExploreNavigator from './ExploreNavigator'
import HomeScreen from '../screens/Home/Index';
import AccomodationScreen from '../screens/AccomodationPlace';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
   
    return (
    
        <Tab.Navigator 
         tabBarOptions={{
            activeTintColor:'#f15454'
        }}>
            <Tab.Screen 
             name={'Explore'}
           component={ExploreNavigator}
             options={{
               tabBarIcon: ({color}) => (
                 <Fontisto name="search" size={25} color={color} />
               ),
             }}
             />
             <Tab.Screen 
            name={'Saved'}
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <FontAwesome name="heart-o" size={25} color={color} />
              ),
            }}
            />
             <Tab.Screen 
            name={'workation'}
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="airbnb" size={25} color={color} />
              ),
            }}
            />
             <Tab.Screen 
            name={'messages'}
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <Feather name="message-square" size={25} color={color} />
              ),
            }}
            />
              <Tab.Screen 
            name={'profile'}
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={25} color={color} />
              ),
            }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;
