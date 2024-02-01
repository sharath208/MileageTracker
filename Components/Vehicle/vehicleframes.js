import React from 'react'; 
import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Frame=(props)=>
{
    return(
        <View style={{backgroundColor:"white",borderRadius:12,alignItems:"center"}}>
            {
                props.source===""
                ?
                props.type==='2 wheeler'?<Image source={require('../images/NoBikeimage.png')} style={{borderRadius:8}}/>:<Image source={require('../images/NoCarimage.png')} style={{borderRadius:8}}/>
                :
                <Image source={{uri:props.source}} style={{height:150,borderRadius:8}} />
            }
            {
                props.engine&&<View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{width:"75%"}}>
                    <View><Text style={{fontSize:20}}>{props.name}</Text></View>
                    <View><Text style={{fontSize:15}}>{props.type}</Text></View>
                </View>
                <View style={{justifyContent:"center"}}>
                    <Text>{props.engine}CC</Text>
                </View>
                </View>
            }
        </View>
    )
}

export default Frame;