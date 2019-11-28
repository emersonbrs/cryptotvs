import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { coinIcons } from '../../utils/coinIcons';
import normalizeMoney from '../../utils/format';

import * as CryptoActions from '../../store/modules/crypto/actions';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  AddCryptoButton,
  CryptoContainer,
  CryptoCurrencies,
  CryptoDetails,
  CryptoUSD,
  CryptoText,
} from './styles';

class Main extends Component {
  state = {
    newCrypto: '',
  };

  handleAddNewCrypto = async () => {
    this.props.addCryptoRequest('btc');
  };

  render() {
    const { newCrypto } = this.state;

    const { crypto, removeCrypto } = this.props;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add Crypto"
            value={newCrypto}
            onChangeText={text => this.setState({ newCrypto: text })}
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <CryptoContainer>
          {crypto.map(crypto => (
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
                    style={{ fontWeight: 'bold', color: '#000', fontSize: 16 }}
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
                  style={{ fontWeight: 'bold', color: '#000', fontSize: 14 }}
                >
                  {normalizeMoney(crypto.data.market_data.price_usd)}
                </Text>
                <Text style={{ color: '#000', fontSize: 14 }}>
                  {crypto.data.market_data.percent_change_usd_last_24_hours}
                </Text>
              </CryptoUSD>
              <SubmitButton onPress={() => removeCrypto(crypto.data.symbol)}>
                <Icon name="add" size={20} color="#fff" />
              </SubmitButton>
            </CryptoCurrencies>
          ))}
        </CryptoContainer>

        <AddCryptoButton onPress={this.handleAddNewCrypto}>
          <Text style={{ color: '#fff', fontSize: 16 }}>
            Add a Cryptocurrent
          </Text>
        </AddCryptoButton>
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
)(Main);

Main.navigationOptions = {
  title: 'CryptoTracker Pro',
};
