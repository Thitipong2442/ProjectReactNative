import React, {useState} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView, Button} from 'react-native';

const TextInputPractice1 = () => {
  const [inputName, SetinputName] = useState('');
  const [inputEmail, SetinputEmail] = useState('');

  const onPressAlert = () => {
    if (!inputName.trim()) {
      alert('Please Enter Name');
    } else if (!inputEmail.trim()) {
      alert('Please Enter Email');
    } else {
      alert('Success');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            placeholder="Enter Name"
            onChangeText={inputName => {
              SetinputName(inputName);
            }}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            placeholder="Enter Mail"
            onChangeText={inputEmail => {
              SetinputEmail(inputEmail);
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Button onPress={onPressAlert} title="Submit" color="#95908F" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

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
  },
});
