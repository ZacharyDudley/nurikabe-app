import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Square } from '../Components'

export default class Board extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    // const { sizeW, sizeH } = this.props.size

    return (
      <View style={styles.container}>
      {
        this.props.size && <Square />
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
