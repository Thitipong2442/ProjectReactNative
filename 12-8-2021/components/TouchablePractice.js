import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const TouchablePractice = () => {

    const [inputEmail, SetinputEmail] = useState('');
    const [inputPass, SetinputPass] = useState('');
    
    const onPressAlert = () => {
        if (!inputEmail.trim()) {
          alert('Please Enter Email');
        } else if (!inputPass.trim()) {
          alert('Please Enter Password');
        } else {
          alert('Email: '+inputEmail+'\nPassword: '+inputPass);
        }
      };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
            <TextInput
                placeholder="Mail"
                onChangeText={inputEmail => {
                    SetinputEmail(inputEmail);
                  }}
            />
        </View>
        <View style={styles.textInputStyle}>
            <TextInput
                placeholder="Password"
                onChangeText={inputPass => {
                    SetinputPass(inputPass);
                  }}
            />
        </View>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={onPressAlert}>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: '#EE2414',
    
    
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    marginTop:15
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});
