import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ContainerDetails,
  ListCryptoText,
  SubmitButton,
} from './styles';
import { coinIcons } from '../../utils/coinIcons';

import * as CryptoActions from '../../store/modules/crypto/actions';

// const mapStateToProps = state => ({
//   crypto: state.crypto,
// });

class CryptoDescription extends Component {
  state = {};

  removeGoMain = symbol => {
    const { goBack } = this.props.navigation;
    const { removeCrypto } = this.props;
    removeCrypto(symbol);
    goBack();
  };

  render() {
    const crypto = this.props.navigation.state.params.crypto.data;

    return (
      <Container>
        <ContainerDetails>
          <Image
            style={{ width: 110, height: 110 }}
            source={{
              uri: coinIcons[crypto.symbol],
            }}
          />
          <View
            style={{
              width: '70%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <ListCryptoText>Name</ListCryptoText>
            <ListCryptoText>{crypto.name}</ListCryptoText>
          </View>

          <View
            style={{
              width: '70%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <ListCryptoText>Symbol</ListCryptoText>
            <ListCryptoText>{crypto.symbol}</ListCryptoText>
          </View>
          <ListCryptoText>
            $ {crypto.market_data.price_usd.toFixed(2)}
          </ListCryptoText>
          <ListCryptoText style={{ color: 'green' }}>
            {Math.sign(crypto.market_data.percent_change_usd_last_24_hours) ==
            1 ? (
              <Text style={{ color: 'green', fontSize: 12 }}>
                <Icon name="call-made" size={12} color="green" />
                {crypto.market_data.percent_change_usd_last_24_hours.toFixed(2)}
                %
              </Text>
            ) : (
              <Text style={{ color: 'red', fontSize: 12 }}>
                <Icon name="call-received" size={12} color="red" />
                {crypto.market_data.percent_change_usd_last_24_hours.toFixed(2)}
                %
              </Text>
            )}
          </ListCryptoText>
        </ContainerDetails>

        <SubmitButton onPress={() => this.removeGoMain(crypto.symbol)}>
          <Text>Delete Crypto</Text>
        </SubmitButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CryptoActions, dispatch);

export default connect(
  state => ({
    crypto: state.crypto,
  }),
  mapDispatchToProps
)(CryptoDescription);
