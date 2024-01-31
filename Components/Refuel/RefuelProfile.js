import {View,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const Profile=(props)=>
{
    const Days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const Months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
    return(
        <View style={{backgroundColor:"white",height:60,borderRadius:8,margin:"4%",justifyContent:"center"}}>
            <View style={{justifyContent:"center",padding:"7%"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"80%",flexDirection:"row",justifyContent:"flex-start"}}>
                        <View style={{paddingRight:3}}>
                            <Image source={require('../images/flower.png')}/>
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <Text>{Days[props.date.getDay()]}, {props.date.getDate()} {Months[props.date.getMonth()]}'{props.date.getFullYear()%100}</Text>
                            <Text>{props.fuel}L</Text>
                        </View>
                    </View>
                    <View style={{width:"20%"}}>
                        <Text>+S$ {props.cost.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Profile;