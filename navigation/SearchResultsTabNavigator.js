import React, {useEffect,useState} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResult/Index'
import SearchResultsMaps from '../screens/SearchResultsMap';
import {useRoute} from '@react-navigation/native'

import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../src/graphql/queries'

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

   const [posts, setPosts] = useState([])
   const route = useRoute()
   const {guests, viewport} = route.params

    useEffect(()=>{
        const fetchPost = async()=>{
              try{
                  const postResult = await API.graphql(
                      graphqlOperation(listPosts, {
                          filter: {
                              and :{
                                  maxGuests:{
                                      ge:guests
                                  },
                                  latitude:{
                                      between:[
                                          viewport.southwest.lat,
                                          viewport.northeast.lat,
                                      ],
                                  },
                                  longitude:{
                                      between:[
                                          viewport.southwest.lng,
                                          viewport.northeast.lng,
                                      ],
                                  }
                              }
                            
                          }
                      }
                      )
                  )
                  console.log(postResult)
                  setPosts(postResult.data.listPosts.items);
  
              }catch(e){
                  console.log(e);
              }
                  }
        fetchPost()
     },[])

    

    return (
       <Tab.Navigator tabBarOptions={{
           activeTintColor:'#f15454',
           indicatorStyle :{
               backgroundColor: '#f15454'
           }
       }}>
         <Tab.Screen name={"list"} >
             {()=>( <SearchResultScreen posts={posts}/>)
           
            }   
         </Tab.Screen>

         <Tab.Screen name={"map"}  > 
         {()=>(<SearchResultsMaps posts={posts}/>)
             
         }
         </Tab.Screen>

       </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
