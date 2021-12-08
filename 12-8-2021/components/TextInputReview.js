import React,{useState} from 'react'
import {SafeAreaView, TextInput,View,StyleSheet,Text,Button} from 'react-native';

const TextInputReview = () => {

    const [text,onChangeText] = useState('')

    return (
        <SafeAreaView style = {styles.container}>
            <Text style={{color:'blue'}}>{text}</Text>
            <TextInput 
            style = {styles.input}
            onChangeText = {onChangeText}
            value = {text}
        />    
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  marginTop: 20,
  justifyContent:"center",
  backgroundColor: '#ffffff',
  },
  input: {
  width: 250,
  height: 44,
  padding: 10,
  marginTop: 20,
  marginBottom: 10,
  backgroundColor: '#e8e8e8',
  textAlign:'center'
  },
});

  export default TextInputReview;
