import React, { Component, useState } from 'react';
import { StyleSheet, Text, View,  ScrollView} from 'react-native';
import { Toolbar } from './src/Toolbar'
import { AddItems } from './src/AddItems'
import { OutPutRes } from './src/OutPutRes'

export default function App(){
  const [strs, setStrs] = useState([])

  const addStr = (title) => {

    setStrs(prev => [
      ...prev, {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeStr = id => {
    setStrs(prev => prev.filter(str => str.id !== id))
  }

  return (
    <View>
      <Toolbar title='My First App'/>
      <View style={styles.container}>
        <AddItems onSubmit={addStr}/>

        <ScrollView>
          {
            strs.map(inputStr=> {
        //      return <Text>{todo.title}</Text>
              return <OutPutRes str={inputStr} key={inputStr.id}
                        onRemove={removeStr}/>
            })
          }
        </ScrollView>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20
  }
})
