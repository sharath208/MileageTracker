import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        <View style={{alignItems:"center",borderRadius:12,height:"30%",width:"80%"}}>
            <Image source={require('../images/add.png')} />
            <View style={{alignItems:"center"}}>
                <View style={{flexDirection:"column"}}>
                    <Text>{props.vehicle.name}</Text>
                    <Text>{props.vehicle.type}</Text>
                </View>
                <View>
                    <Text>{props.vehicle.engine}</Text>
                </View>
            </View>
        </View>
    )
}
export default Profile;