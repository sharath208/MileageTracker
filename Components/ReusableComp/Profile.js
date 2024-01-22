import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        <View style={{alignItems:"center"}}><Image source={require('../images/add.png')} style={{borderRadius:50,height:100,width:100}}/><View style={{alignItems:"center"}}><Text>{props.nickname===""?props.name:props.nickname}</Text></View></View>
    )
}
export default Profile;