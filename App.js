import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Board } from './Components'


class Menu extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text>NURIKABE</Text>
        <Button
          title='play'
          onPress={() => {
            this.props.navigation.navigate('Game', {
              sizeH: 10,
              sizeW: 10
            })}}
        />
      </View>
    )
  }
}

class Game extends Component {
  render() {
    const { params } = this.props.navigation.state
    const sizeH = params ? params.sizeH : null
    const sizeW = params ? params.sizeW : null

    return(
      <View style={ styles.container }>
        <Board size={sizeW, sizeH} />
      </View>
    )
  }
}

const RootStack = StackNavigator({
  Menu: {
    screen: Menu
  },
  Game: {
    screen: Game
  }
}, {
  initialRouteName: 'Menu'
})

export default class App extends Component {
  render() {
    return <RootStack />
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
