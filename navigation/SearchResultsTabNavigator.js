import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResult/Index'
import SearchResultsMaps from '../screens/SearchResultsMap';




const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return (
       <Tab.Navigator tabBarOptions={{
           activeTintColor:'#f15454',
           indicatorStyle :{
               backgroundColor: '#f15454'
           }
       }}>
         <Tab.Screen name={"list"} component={SearchResultScreen} />
         <Tab.Screen name={"map"} component={SearchResultsMaps} />

       </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
