import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=({props})=>
{
    return(
        <View style={{alignItems:"center"}}><TouchableOpacity style={StyleSheet.Image}><Image source={require('../images/add.png')} style={{borderRadius:50,height:100,width:100}}/><View style={{alignItems:"center"}}><Text>Name</Text></View></TouchableOpacity></View>
    )
}
const styles=StyleSheet.create({
    Image:{
        height:150,
        width:150,
    }
})
export default Profile;