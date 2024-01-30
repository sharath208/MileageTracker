import React, { useState } from 'react';
import { Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const App = (props) => {
  const icon=()=>{
    return <Image source={require('../images/dropdown.png')}/>
  }
  return (
    <SelectDropdown
      data={props.list}
      onSelect={props.onSelect}
      defaultButtonText={props.default===null||props.default===undefined?props.name:props.default}
      buttonStyle={props.style}
      renderDropdownIcon={icon}
      defaultValue={props.default}
      buttonTextStyle={{fontFamily:"New Rubrik",fontSize:16,textAlign:"left",color:"#58798C"}}
    />
  );
};

export default App;
