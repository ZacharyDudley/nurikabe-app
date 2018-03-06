import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Square } from '../Components'

export default class Board extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          <Square />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
