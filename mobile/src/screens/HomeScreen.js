// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import { getAllCoinMarket } from '../actions/entities';

 class HomeScreen extends Component {
  state = {}
  componentDidMount(){
    this.props.getAllCoinMarket();
  }

  render() {
return (
     <View>
     <Text>HomeScreen</Text>
     </View>
    );

  }
}

export default connect(undefined, { getAllCoinMarket })(HomeScreen);
