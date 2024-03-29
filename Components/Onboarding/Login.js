import React , {useState }from 'react';
import { useQuery, useRealm } from '@realm/react';
import LinearGradient from 'react-native-linear-gradient';
import { View, TextInput,Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ImageContentPage = ({navigation} ) => {
  const [isChecked, setChecked] = useState(false);
  const handleCheckboxToggle = () => {
    setChecked(!isChecked);
  };
  const realm = useRealm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const handleNameChange = (value) => {
    setName(value);
      const alphabetRegex = /^[a-zA-Z]+$/;
      if(value==="")
      setError1(false);
      else if (alphabetRegex.test(value)) {
        setError1(false);
      } else {
        setError1(true);
      }
  };
  const handleNickNameChange = (value) => {
    setNickName(value);
      const alphabetRegex = /^[a-zA-Z]+$/;
      if(value==="")
      setError2(false);
      else if (alphabetRegex.test(value)) {
        setError2(false);
      } else {
        setError2(true);
      }
  };
  const checkEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError4(false);
    setEmail(value);
    if(value==="")
      setError3(false);
      else if (emailRegex.test(value)) {
        setError3(false);
      } else {
        setError3(true);
      }
  };
  const Continue = () => {
        const existingUser = realm.objects('User').filtered('email = $0', email)[0];
  
        if (existingUser) {
          setError4(true);
        }
      navigation.navigate('Passcode', {
        id:new Realm.BSON.ObjectId,
        email: email,
        name:name,
        nickname:nickName,
      });
    }
    const peo = realm.objects('User');
  const veh= realm.objects('Vehicle');
  const fuel=realm.objects('Fuel');
  console.log("people: ",peo,"Vehicles: ",veh,"fuels: ",fuel)
  return (
    <LinearGradient
      colors={['#C5E3DC', '#F6F6EC']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
    <View style={{flex:1,justifyContent:'space-between'}}>
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
            onChangeText={(text) => handleNameChange(text)}
            value={name}
            />
            {error1===true &&<View style={{ flexDirection: 'row'}}><Image source={require('../images/error.png')}/><Text style={{ color: 'red' }}>You cannot include symbols or numbers</Text></View> }
            <View style={styles.mediumBox}></View>
            <View><Text>NickName</Text></View>
            <View style={styles.smallBox}></View>
            <TextInput
            backgroundColor="white"
            style={styles.input}
            onChangeText={(text) => handleNickNameChange(text)}
            value={nickName}
            />
            {error2===true &&<View style={{ flexDirection: 'row'}}><Image source={require('../images/error.png')}/><Text style={{ color: 'red' }}>You cannot include symbols or numbers</Text></View>}
            <View style={styles.mediumBox}></View>
            <View><Text>Email Address < Text style={{color:"red"}}>*</Text></Text></View>
            <View style={styles.smallBox}></View>
            <TextInput
            backgroundColor="white"
            style={styles.input}
            onChangeText={(text) => checkEmail(text)}
            value={email}
            keyboardType="email-address"
            />
            {error3===true &&<View style={{ flexDirection: 'row'}}><Image source={require('../images/error.png')}/><Text style={{ color: 'red' }}>Invalid Email</Text></View> }
            {error4===true &&<View style={{ flexDirection: 'row'}}><Image source={require('../images/error.png')}/><Text style={{ color: 'red' }}>Email already in use</Text></View> }
          </View>
        </View>
        <View style={{height:146,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <View style={{width:324}}>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={handleCheckboxToggle}><Text style={isChecked ? styles.checkedContainer : styles.uncheckedContainer}>
              {isChecked && <Text style={styles.tickMark}>&#10004;</Text>}</Text></TouchableOpacity>
              <Text> Tick this box to confirm you are atleast 18 years old and agree to our <Text style={{color:isChecked===false?'black':"red"}}>terms and conditions</Text></Text>
            </View>
            <View style={{margin:10,width:284}}><TouchableOpacity style={{justifyContent:"center",height:48,backgroundColor:email===''||name===''?'#B0B0B0':error1||error2||error3||!isChecked?'#B0B0B0':'#0B3C58',borderRadius:8}} onPress={Continue}  disabled={(name===""||email==="")?true:(!isChecked
            ||error1||error2||error3)?true:false} ><Text style={{textAlign:"center", fontSize:18,color:"white"}}>Continue</Text></TouchableOpacity></View>
          </View>
        </View>
      </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
      input: {
        width:324,
        height: 52,
        borderColor: 'gray',
        borderRadius: 8,
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
      },
      checkedContainer: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: '#F18484',  
        justifyContent: 'center',
        alignItems: 'center',
      },
      uncheckedContainer: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tickMark: {
        color: 'white', 
        fontSize: 14,    
      },
});

export default ImageContentPage;
/*    */ 