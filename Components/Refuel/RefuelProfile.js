import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    return(
        <View >
            <View>
                <View>
                    <Image source={require('../images/flower.png')}/>
                </View>
                <View >
                    <Text>{props.date.toLocaleString()}</Text>
                    <Text>{props.fuel}</Text>
                </View>
                <View >
                    <Text>{props.cost}</Text>
                </View>
            </View>
        </View>
    )
}
export default Profile;