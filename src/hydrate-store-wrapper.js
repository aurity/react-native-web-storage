/**
 * hydrate-store-wrapper.js - HOC helper to synchronise and hydrate data before the app will start
 * react-native-web-storage
 *
 * Created by Peter Kowalczyk on 07/01/17.
 * Copyright © 2017 Aurity. All rights reserved.
 *
 */
import React, { Component } from 'react'
import { View } from 'react-native'
import hydrateStore from './hydrate-store'

const HydrateStore = store => WrappedComponent => class HydrateState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hydratingFinished: false,
    }
  }

  componentDidMount() {
    hydrateStore()
      .then(startApp.bind(this))
      .catch(startApp.bind(this))

    function startApp() {
      this.setState({
        hydratingFinished: true,
      })
    }
  }

  render() {
    const { hydratingFinished } = this.state
    return hydratingFinished ? <WrappedComponent store={store} /> : <View />
  }
}

export default HydrateStore

