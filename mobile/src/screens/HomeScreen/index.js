// @flow

import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { FlatList } from 'react-native';

import { getAllCoinMarket } from '../../actions/entities';
import Loading from '../../components/Loading';

import type { CoinMarketCapData } from '../../types/data';

import Coin from './Coin';

const Root = styled.View`
flex: 1;
`;

 class HomeScreen extends Component {
  state = {}
  componentDidMount(){
    this.props.getAllCoinMarket();
  }

  _renderItem = ({ item }: { item: CoinMarketCapData }) => <Coin data={item} />

  render() {

    if (this.props.coins.length === 0) {
      return <Loading />
    }
return (
     <Root>
     <FlatList
       contentContainerStyle={{ alignSelf: 'stretch' }}
       keyExtractor={item => item.id}
       renderItem={this._renderItem}
       data={this.props.coins}
     />
     </Root>
    );

  }
}

export default connect(({ entities }) => (
  { coins: entities.coins }
), { getAllCoinMarket })(HomeScreen);
