import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        <View style={{width:"100%",marginTop:"7%",height:"27%",backgroundColor:"white",borderColor:"grey",borderRadius:8,justifyContent:"center"}}>
            <View style={{height:"80%",flexDirection:"row"}}>
                <View style={{marginLeft:6,width:"10%",justifyContent:"center"}}>
                    <Image source={require('../images/flower.png')}/>
                </View>
                <View style={{width:"60%",flexDirection:"column",justifyContent:"center"}}>
                    <Text>{props.date.toLocaleDateString()}</Text>
                    <Text>{props.fuel}</Text>
                </View>
                <View style={{justifyContent:"center",width:"30%"}}>
                    <Text>{props.cost}</Text>
                </View>
            </View>
        </View>
    )
}
export default Profile;