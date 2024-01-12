import React , {useState }from 'react';
import { Button, View, TextInput,Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ImageContentPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View style={{flex:1,backgroundColor:"#D6E4E4",justifyContent:'space-between'}}>
        <View style={{marginLeft:30,justifyContent:'space-between'}}>
          <View style={styles.largeBox}></View>
          <View>
            <Text style={{fontSize:22,fontFamily:"New Rubrik",fontWeight:500}}>
                Create Account
            </Text>
            <View style={styles.mediumBox}></View>
            <View>
              <Text>Name < Text style={{color:"red"}}>*</Text></Text>
            </View>
            <View style={styles.smallBox}></View>
            <TextInput
            backgroundColor="white"
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            />
            <View style={styles.mediumBox}></View>
            <View><Text>NickName</Text></View>
            <View style={styles.smallBox}></View>
            <TextInput
            backgroundColor="white"
            style={styles.input}
            onChangeText={(text) => setNickName(text)}
            value={nickName}
            />
            <View style={styles.mediumBox}></View>
            <View><Text>Email Address < Text style={{color:"red"}}>*</Text></Text></View>
            <View style={styles.smallBox}></View>
            <TextInput
            backgroundColor="white"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            />
          </View>
        </View>
        <View style={{height:146,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
          <View style={{width:324,alignItems:'center'}}><Text style={{height:36}}>Tick this box to confirm you are atleast 18 years old and agree to our <Text style={{color:isChecked===false?'black':"red"}}>terms and conditions</Text></Text></View>
          <View style={{margin:10,width:284}}><Button title='Continue' onPress={()=>{navigation.navigate('Passcode')}}/></View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
      input: {
        width:324,
        height: 52,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
      },
      smallBox:{
        height:12,
      },
      mediumBox:{
        height:32,
      },
      largeBox:{
        height:40,
      }
});

export default ImageContentPage;
