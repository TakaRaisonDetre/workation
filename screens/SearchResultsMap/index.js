import React, {useState, useEffect, useRef} from 'react'
import { Text, View, FlatList ,useWindowDimensions} from 'react-native'
import styles from './styles'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

//import places from '../../assets/data/feed'
import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../src/graphql/queries'


import CustomMaker from '../../components/CustomMarker'
import PostCarousalItem from '../../components/PostCarousalItem'


const SearchResultsMaps = (props) => {
 
   const {guests} = props
 
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [posts, setPosts] = useState([]);
   

    const width = useWindowDimensions().width
    const flatlist = useRef();
    const map = useRef()

    const viewConfig =useRef({itemVisiblePercentThreshold:70})
   
    const onViewChanged = useRef(({viewableItems})=>{
        console.log(viewableItems)
        if(viewableItems.length>0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

   useEffect(()=>{
      const fetchPosts = async()=>{
          try {
            const postsResult = await API.graphql(
                graphqlOperation(listPosts, {
                    filter :{
                        maxGuests :{
                            ge: guests
                        }
                    }
                })
            )
            setPosts(postsResult.data.listPosts.items)
          } catch(e) 
          {
              console.log(e)
          }
      }
      fetchPosts();
   },[])


    useEffect(()=>{
        if(!selectedPlaceId || !flatlist){
            return;
        }
        const index = posts.findIndex(place=>place.id ===selectedPlaceId)
        flatlist.current.scrollToIndex({index:index})

       console.log("scroll to " + selectedPlaceId)
      
        const selectedPlace = posts[index];
        const region ={
           latitude:selectedPlace.latitude,
           longitude:selectedPlace.longitude,
           latitudeDelta:0.8,
           longitudeDelta:0.8
        }
        map.current.animateToRegion(region)
    },[selectedPlaceId])


    return (
        <View style={{width:'100%', height:'100%'}}>
            <MapView 
            ref={map}
            provider={PROVIDER_GOOGLE}
             style={{width:'100%', height:'100%'}}
             initialRegion={{
                 latitude: 28.3279822,
                 longitude: -16.5124847,
                 latitudeDelta:0.8,
                 longitudeDelta:0.8,
             }} 
             >
             {posts.map(place=>(
             <CustomMaker 
             coordinate={{ latitude: place.latitude, longitude: place.longitude }}
             price={place.newPrice}
             isSelected = {place.id === selectedPlaceId }
             onPress={()=>setSelectedPlaceId(place.id)}
             />
             ))}

             </MapView>

            <View style={{position:'absolute', bottom:30}}>
                {/* <PostCarousalItem post={places[0]}/> */}

                <FlatList
                ref={flatlist}
                data={posts}
                renderItem={({item})=><PostCarousalItem post={item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width -60}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={viewConfig.current}
                onViewableItemsChanged={onViewChanged.current}
                />
            </View>

        </View>
    )
}

export default SearchResultsMaps;
