import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const Toolbar = ({title}) => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.text}>{title}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  toolbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
