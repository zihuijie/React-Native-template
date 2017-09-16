// @flow

import React, { Component } from 'react';
import styled from 'styled-components/native';

import type { CoinMarketCapData } from '../../types/data';

const Root = styled.View`
flex: 1;
`;

const Title = styled.Text`

`;

type Props = {
  data: CoinMarketCapData,
}
class Coin extends Component {
  state = {

  }
props: Props;
  render() {
    return (
      <Root>
        <Title>{this.props.data.name}</Title>
      </Root>
    );
  }
}

export default Coin;
