import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        console.log("in porfile"),
        <View style={{alignItems:"center"}}><Image source={require('../images/add.png')} style={{borderRadius:50,height:100,width:100}}/><View style={{alignItems:"center"}}><Text>{props.user.nickName===null?props.user.name:props.user.nickname}</Text></View></View>
    )
}
const styles=StyleSheet.create({
    Image:{
        height:150,
        width:150,
    }
})
export default Profile;