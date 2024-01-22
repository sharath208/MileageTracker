import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        <View style={{alignItems:"center",height:"100%"}}><Image source={require('../images/add.png')} style={{borderRadius:12,height:"30%",width:"80%"}}/><View style={{alignItems:"center"}}><Text>{props.name}</Text></View></View>
    )
}
export default Profile;