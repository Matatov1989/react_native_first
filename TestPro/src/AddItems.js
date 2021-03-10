import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native';

export const AddItems = ({ onSubmit }) => {

  const [value, setValue] = useState('')

  const pressBtn = () => {
    if (value.trim()){
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Please input your text!')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}
    //    onChangeText={text => setValue(text)}
        onChangeText={setValue}
        value={value}
        placeholder='enter text...'
      />
      <Button title=' Add ' onPress={pressBtn} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10
  }
})
