import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    const colours=['#7bd48b','#7b9dd4','#c5d47b','#d15e58','#585cd1','#bf58d1','#d15884']
    return(
        <View style={{alignItems:"center"}}>
            <View style={{justifyContent:"center",alignItems:"center",borderRadius:50,height:80,width:80,backgroundColor:colours[Math.floor(Math.random() * colours.length)]}}>
                <Text style={{color:"white",fontSize:60, textAlign: 'center', lineHeight: 65 }}>
                    {props.nickname===""?props.name[0]:props.nickname[0]}
                </Text>
            </View>
            <View style={{alignItems:"center"}}>
                <Text>
                    {props.nickname===""?props.name:props.nickname}
                </Text>
            </View>
        </View>
    )
}
export default Profile;