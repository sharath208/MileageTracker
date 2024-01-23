import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        <View style={{height:"28%",backgroundColor:"white",borderColor:"grey",borderRadius:8,justifyContent:"center"}}>
            <View style={{height:"80%",flexDirection:"row"}}>
                <View style={{marginLeft:6,width:"10%",justifyContent:"center"}}>
                    <Image source={require('../images/flower.png')}/>
                </View>
                <View style={{width:"70%",flexDirection:"column",justifyContent:"center"}}>
                    <Text>{props.date}</Text>
                    <Text>{props.fuel}</Text>
                </View>
                <View style={{width:"30%",justifyContent:"center"}}>
                    <Text>{props.cost}</Text>
                </View>
            </View>
        </View>
    )
}
export default Profile;