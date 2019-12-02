import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import { Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AddFirstCrypto,
  CryptoContainer,
  CryptoCurrencies,
  CryptoDetails,
  CryptoUSD,
  CryptoText,
} from './styles';
import { coinIcons } from '../../utils/coinIcons';

import * as CryptoActions from '../../store/modules/crypto/actions';

class CryptoList extends Component {
  state = {
    symbol: '',
  };

  goToCryptoDescription = crypto => {
    this.props.navigation.navigate('CryptoDescription', { crypto });
  };

  removeGoMain = symbol => {
    const { goBack } = this.props.navigation;
    const { removeCrypto } = this.props;
    removeCrypto(symbol);
    goBack();
  };

  horas = symbol => {
    this.props.addCryptoRequest(symbol);
    this.removeGoMain(symbol);
  };

  componentDidMount() {
    setInterval(() => {
      this.props.crypto.map(crypto => this.horas(crypto.data.symbol));
    }, 20000);
  }

  render() {
    const { crypto } = this.props;

    return (
      <CryptoContainer>
        {crypto.length == 0 ? (
          <AddFirstCrypto onPress={this.props.loadCryptoRequest}>
            <Icon name="add-circle" size={60} color="orange" />
            <Text style={{ fontWeight: 'bold', color: 'orange' }}>
              Add my first Crypto
            </Text>
          </AddFirstCrypto>
        ) : (
          false
        )}
        {crypto.map(crypto => (
          <TouchableOpacity
            onPress={() => {
              this.goToCryptoDescription(crypto);
            }}
          >
            <CryptoCurrencies>
              <CryptoDetails>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={{
                    uri: coinIcons[crypto.data.symbol],
                  }}
                />
                <CryptoText>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 16,
                    }}
                  >
                    {crypto.data.name}
                  </Text>
                  <Text style={{ color: '#778899', fontSize: 16 }}>
                    {crypto.data.symbol}
                  </Text>
                </CryptoText>
              </CryptoDetails>

              <CryptoUSD>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: 14,
                  }}
                >
                  $ {crypto.data.market_data.price_usd.toFixed(2)}
                </Text>
                {Math.sign(
                  crypto.data.market_data.percent_change_usd_last_24_hours
                ) == 1 ? (
                  <Text style={{ color: 'green', fontSize: 12 }}>
                    <Icon name="call-made" size={12} color="green" />
                    {crypto.data.market_data.percent_change_usd_last_24_hours.toFixed(
                      2
                    )}
                    %
                  </Text>
                ) : (
                  <Text style={{ color: 'red', fontSize: 12 }}>
                    <Icon name="call-received" size={12} color="red" />
                    {crypto.data.market_data.percent_change_usd_last_24_hours.toFixed(
                      2
                    )}
                    %
                  </Text>
                )}
              </CryptoUSD>
            </CryptoCurrencies>
          </TouchableOpacity>
        ))}
      </CryptoContainer>
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
)(withNavigation(CryptoList));
