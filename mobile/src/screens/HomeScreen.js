// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import { getAllCoinMarket } from '../actions/entities';
import Loading from '../components/Loading';

 class HomeScreen extends Component {
  state = {}
  componentDidMount(){
    this.props.getAllCoinMarket();
  }

  render() {

    if (this.props.coins.length === 0) {
      return <Loading />
    }
return (
     <View>
     <Text>HomeScreen</Text>
     </View>
    );

  }
}

export default connect(({ entities }) => (
  { coins: entities.coins }
), { getAllCoinMarket })(HomeScreen);
