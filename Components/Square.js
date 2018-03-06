import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Square extends Component {
  constructor () {
    super ()
    this.state = {
      dead: false,
    }
  }

  onPress = () => {
    let isDead = this.state.dead

    this.setState({
      dead: !isDead
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity
          style={ this.state.dead ? styles.buttonDead : styles.buttonAlive }
          onPress={this.onPress}
        >
          <Text style={ styles.text }>
            { this.state.dead ? '*' : ' ' }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    // padding: 10,
    // margin: 10,
    backgroundColor: '#555555'
  },
  buttonAlive: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    padding: 5,
    margin: 5,
    backgroundColor: '#000000'
  },
  buttonDead: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    padding: 5,
    margin: 5,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  }
})
